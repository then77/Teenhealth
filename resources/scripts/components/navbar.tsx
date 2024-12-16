
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

import { Link, useLocation } from "react-router";
import { Button } from "@/components/ui/button";
import {
    ArrowRight,
    BookOpen,
    House,
    Info,
    SquareArrowOutUpRight,
    UserIcon,
    LogOut,
    Menu
} from "lucide-react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { useStoreState } from "@/store";
import { User } from "@/store/user";

import logoLight from "@/assets/logo/light_64.png";
import defaultAvatar from "@/assets/illustrations/avatar.png";
import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from "@/components/ui/avatar";
import { toast } from "react-hot-toast";
import logout from "@/api/auth/logout";

interface NavbarLinks {
    href: string;
    link: string;
    target?: string;
}

interface NavbarProps {
    links: NavbarLinks[];
    className?: string;
    navItems?: NavbarLinkItemBaseProps;
}

export default function Navbar({
    className, links, navItems
}: NavbarProps) {

    // Navbar link item refs
    const refs: Record<string, React.RefObject<any>> = {};

    // React router location hook
    const location = useLocation();

    // Store hooks
    const user = useStoreState((state) => state.user);

    // Navbar selected bar
    const [leftPos, setLeftPos] = useState(80);
    const [width, setWidth] = useState(0);
    const [show, setShow] = useState(false);

    // Update selected bar position
    const updateBar = () => {
        const ref = refs[location.pathname];
        if (ref && ref.current) {
            setLeftPos(ref.current.offsetLeft);
            setWidth(ref.current.offsetWidth);
            setTimeout(() => setShow(true), 20);
        } else setShow(false);
    }
    useEffect(updateBar, [location.pathname]);

    // Bruteforce update selected bar position on first load
    // Due to some bug with position
    useEffect(() => {
        const interval = setInterval(updateBar, 100);
        setTimeout(() => clearInterval(interval), 1000);
        return () => clearInterval(interval);
    }, []);

    // function to use for determine dashboard mode or not
    const checkDashboard = () => {
        return /\/dashboard(\/materi|\/quiz)?/.test(location.pathname)
            || /\/materi\/.+/.test(location.pathname)
            || /\/quiz\/.+/.test(location.pathname);
    }

    return (
        <>
            <div className={cn(
                "fixed top-0 left-0 w-screen h-full max-h-18",
                "px-12 md:px-16 lg:px-24 py-4",
                "bg-white shadow-xs border-b border-zinc-200",
                "justify-between items-center gap-20 inline-flex",
                checkDashboard() && "hidden", className
            )}>
                <div className="flex justify-start items-center gap-20">
                    <div className="justify-start items-center gap-5 md:gap-6 flex">
                        <img className="w-7 sm:w-8" src={logoLight} />
                        <div className="text-sky-500 text-2xl sm:text-3.25xl py-0.5 font-medium">teenhealth</div>
                    </div>
                    <div className="justify-start items-center gap-8 hidden lg:flex text-zinc-800">
                        {links.map((link) => {

                            // Create ref for link item
                            const ref = useRef<any>(null);
                            refs[link.href] = ref;

                            return (
                                <NavbarLinkItem
                                    key={link.link}
                                    ref={ref}
                                    {...link}
                                    selected={link.href === location.pathname}
                                    {...navItems}
                                />
                            )
                        })}
                    </div>

                    {/* Selected bar */}
                    <div
                        className={cn("hidden lg:inline-block absolute mt-8 bg-blue-300 h-1.25 rounded-full", show ? "duration-200 opacity-100" : "opacity-0")}
                        style={{
                            left: leftPos,
                            width: width,
                        }}
                    />
                </div>

                {/* Login button */}
                <div className="flex justify-end">
                    {user ? (
                        <DropdownCustom user={user} links={links} navItems={navItems}>
                            <Avatar>
                                <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
                                <AvatarImage src={user.profile_pic ?? defaultAvatar} />
                            </Avatar>
                        </DropdownCustom>
                    ) : (
                        <>
                            <Button className="hidden lg:inline-flex" asChild>
                                <Link to="/login">
                                    Mulai
                                    <ArrowRight />
                                </Link>
                            </Button>
                            <div className="lg:hidden">
                                <DropdownCustom user={user} links={links} navItems={navItems}>
                                    <Menu />
                                </DropdownCustom>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

interface NavbarLinkItemBaseProps {
    className?: string;
    ref?: React.RefObject<any>;
    props?: React.HTMLAttributes<HTMLParagraphElement> | React.HTMLAttributes<HTMLAnchorElement>;
}

interface NavbarLinkItemProps extends NavbarLinkItemBaseProps {
    href: string;
    link: string;
    target?: string;
    selected: boolean;
    children?: React.ReactNode;
};

export function DropdownCustom({
    user, links, navItems, noMargin, children
}: {
    user: User | null,
    links?: NavbarLinks[],
    navItems?: NavbarLinkItemBaseProps | undefined,
    children: React.ReactNode
    noMargin?: boolean
}) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                {children}
            </DropdownMenuTrigger>
            <DropdownMenuContent className={cn(
                "w-[90vw] mx-[5vw] sm:w-64 sm:mr-8 mt-2 p-4 py-4 sm:p-2 sm:py-3",
                !noMargin && "lg:mr-16"
            )}>
                {links && (
                    <div className="flex flex-col px-1 gap-3 sm:gap-0 lg:hidden">
                        {links.map((link) => {
                            return (
                                <DropdownMenuItem key={link.link} className="focus:bg-transparent p-0">
                                    <NavbarLinkItem
                                        key={link.link}
                                        {...link}
                                        selected={link.href === location.pathname}
                                        {...navItems}
                                    >
                                        {link.link === "Home"
                                            ? <House className="w-4 h-4" />
                                            : link.link === "Learn"
                                                ? <BookOpen className="w-4 h-4" />
                                                : link.link === "About"
                                                    ? <Info className="w-4 h-4" />
                                                    : <SquareArrowOutUpRight className="w-4 h-4" />}
                                    </NavbarLinkItem>
                                </DropdownMenuItem>
                            )
                        })}
                        <DropdownMenuSeparator />
                    </div>
                )}
                {
                    user ? (
                        <>
                            <div className="flex flex-col px-2 py-2">
                                <DropdownMenuLabel className="font-medium">{user.name}</DropdownMenuLabel>
                                <DropdownMenuLabel>{user.email}</DropdownMenuLabel>
                            </div>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem><UserIcon /> Profile</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-500 focus:text-red-500 focus:bg-red-50" onClick={callLogout}><LogOut /> Logout</DropdownMenuItem>
                        </>
                    ) : <DropdownMenuItem className="focus:bg-transparent">
                        <Button asChild>
                            <Link className="w-full flex justify-center items-center gap-2" to="/login">
                                Mulai
                                <ArrowRight />
                            </Link>
                        </Button>
                    </DropdownMenuItem>
                }
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

const callLogout = async () => {
    await toast.promise(
        new Promise((resolve, reject) => logout(resolve, reject)), {
        loading: "Logging out...",
        success: "Berhasil keluar",
        error: "Gagal keluar"
    });
};

const NavbarLinkItem = React.forwardRef<any, NavbarLinkItemProps>(({
    href, link, selected, target,
    className, children, ...props
}, ref) => {

    return selected ? (
        <div className="flex items-center gap-3 sm:gap-0" ref={ref}>
            {children && <div className="bg-blue-400 sm:bg-transparent text-white sm:text-blue-400 rounded-lg w-9 h-9 flex justify-center items-center">{children}</div>}
            <p className={cn(
                "text-blue-400 text-lg cursor-default",
                className
            )} {...props}>{link}</p>
        </div>
    ) : (
        <Link ref={ref} to={href} target={target} className={cn(
            "text-zinc-800 hover:text-blue-400 duration-200 text-lg",
            className
        )}>
            <div className="flex items-center gap-3 sm:gap-0">
                {children && <div className="bg-zinc-100 sm:bg-transparent text-zinc-800 sm:text-inherit rounded-lg w-9 h-9 flex justify-center items-center">{children}</div>}
                <p {...props} >{link}</p>
            </div>
        </Link>

    );
});
