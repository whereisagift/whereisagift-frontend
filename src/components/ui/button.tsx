import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/utils";

export const buttonVariants = cva(
  "inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:bg-[#FFE13F] hover:text-black",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-[#FFE13F] hover:text-black",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[#FFE13F] hover:text-black",
        ghost: "hover:bg-[#FFE13F] hover:text-black",
        link: "text-primary underline-offset-4 hover:decoration-[#FFE13F] hover:underline ",
        icon: `
        border border-input bg-background hover:bg-[#FFE13F] hover:text-black
        rounded-full shadow-md
        flex items-center justify-center
        transition-all duration-500 ease-in-out

        z-50
        `,
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
      justify: {
        center: "justify-center",
        start: "justify-start",
        end: "justify-end",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      justify: "center",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, justify, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, justify, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
