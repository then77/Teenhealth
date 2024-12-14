import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[.97] transition-all",
  {
    variants: {
      variant: {
        default:
          "bg-sky-500 text-zinc-50 shadow hover:bg-sky-400 focus-visible:ring-sky-600",
        destructive:
          "bg-red-500 text-zinc-50 shadow-sm hover:bg-red-500/90",
        outline:
          "border border-zinc-200 bg-white shadow-sm hover:bg-zinc-100 hover:text-zinc-900",
        light: "bg-white text-primary-color hover:bg-zinc-100 border border-black/10",
        icon: "size-10 transition-colors ease-in-out duration-300 hover:bg-black/5 rounded-full flex justify-center items-center",
        secondary:
          "bg-zinc-100 text-zinc-900 shadow-sm hover:bg-zinc-100/80",
        ghost: "hover:bg-zinc-100 hover:text-zinc-900",
        link: "text-zinc-800 underline-offset-4 hover:underline",
        empty: "",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        md: "h-10 px-5 py-2",
        lg: "h-[2.75rem] sm:h-12 px-6 sm:px-8 text-base",
        icon: "h-10 w-10 p-0.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
