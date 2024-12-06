
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

import { Link, useLocation } from "react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import { useStoreState } from "@/store";

import logoLight from "@/assets/logo/light_64.png";
import defaultAvatar from "@/assets/illustrations/avatar.png";
import { 
    Avatar, 
    AvatarFallback, 
    AvatarImage 
} from "@/components/ui/avatar";

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
    useEffect(() => {

        // Get selected link item ref
        const ref = refs[location.pathname];

        if (ref && ref.current) {
            setLeftPos(ref.current.offsetLeft);
            setWidth(ref.current.offsetWidth);

            // Set timeout to allow pos and width updated
            // correctly before showing the selected bar
            setTimeout(() => setShow(true), 20);

        } else setShow(false);

    }, [location.pathname]);

    return (
        <>
            <div className={cn(
                "fixed top-0 left-0 w-screen h-full max-h-18",
                "px-12 md:px-16 lg:px-24 py-4",
                "bg-white shadow-xs border-b border-zinc-200",
                "justify-between items-center gap-20 inline-flex",
                className
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
                        <Avatar>
                            <AvatarFallback>N</AvatarFallback>
                            <AvatarImage src={user.profile_picture ?? defaultAvatar} />
                        </Avatar>
                    ) : (
                        <Button asChild>
                            <Link to="/login">
                                Mulai
                                <ArrowRight />
                            </Link>
                        </Button>
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
};

const NavbarLinkItem = React.forwardRef<any, NavbarLinkItemProps>(({
    href, link, selected, target,
    className, ...props
}, ref) => {

    return selected ? (

        <p ref={ref} className={cn(
            "text-blue-400 text-lg cursor-default",
            className
        )} {...props}>{link}</p>

    ) : (

        <Link
            ref={ref}
            to={href}
            target={target}
            className={cn(
                "text-zinc-800 hover:text-blue-400 duration-200 text-lg",
                className
            )} {...props}>{link}</Link>

    );
});
