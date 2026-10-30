import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        red: "bg-red text-white hover:bg-[#b51015]",
        charcoal: "bg-charcoal-deep text-white hover:bg-black",
        white: "bg-white text-charcoal-deep hover:bg-mist",
        outline: "border border-charcoal/25 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-white",
        outlineLight: "border border-white/30 text-white hover:border-white hover:bg-white hover:text-charcoal-deep",
      },
      size: {
        default: "h-12 px-6 text-[15px]",
        sm: "h-10 px-4 text-sm",
      },
    },
    defaultVariants: { variant: "red", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
