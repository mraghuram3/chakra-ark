import * as React from "react";
// import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils";


const BUTTON_SIZES = {
  TINY: "tiny",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large"
};

const BUTTON_TYPES = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TERTIARY: "tertiary",
  PLAIN: "plain",
  ERROR: "error"
};

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center whitespace-nowrap rounded-4 font-semibold ring-offset-background transition-colors focus:outline-none focus:ring-2 focus:ring-primary-300 disabled:pointer-events-none disabled:opacity-50"
  ],
  {
    variants: {
      type: {
        [BUTTON_TYPES.PRIMARY]: [
          "bg-primary-500",
          "hover:bg-primary-600",
          "text-white"
        ],
        [BUTTON_TYPES.SECONDARY]: [
          "bg-gray-200", //bg color
          "hover:bg-gray-300", // hover bg color
          "text-gray-900", // colors
          "font-default", // font-family
          "font-regular", // font-weight
          "h-24", // height
          "max-h-24", // max height
          "leading-mega", //tracking line-height
          "leading-h1",
          "tracking-mega", //tracking letter-spacing
          "tracking-h3",
          "shadow-100", // creating shadow. but not clear need to check
          "ring-secondary-five-100", // need to check the ring color
          "border-spacing-4", // border-spacing

        ],
        [BUTTON_TYPES.SECONDARY]: [
          "bg-gray-200",
          "hover:bg-gray-300",
          "text-gray-900"
        ],
        [BUTTON_TYPES.TERTIARY]: [
          "bg-transparent",
          "text-primary-500",
          "hover:bg-primary-600",
          "hover:text-white",
          "border",
          "border-solid"
        ],
        [BUTTON_TYPES.ERROR]: [
          "bg-error-500",
          "hover:bg-error-600",
          "text-white"
        ]
      },
      size: {
        [BUTTON_SIZES.TINY]: ["text-size-10", "py-2", "px-12", "min-w-[6rem]"],
        [BUTTON_SIZES.SMALL]: ["text-size-12", "py-6", "px-12", "min-w-[8rem]"],
        [BUTTON_SIZES.MEDIUM]: [
          "text-size-14",
          "py-8",
          "px-12",
          "min-w-[10rem]"
        ],
        [BUTTON_SIZES.LARGE]: ["text-size-16", "py-8", "px-20", "min-w-[15rem]"]
      }
    },
    defaultVariants: {
      size: BUTTON_SIZES.LARGE,
      type: BUTTON_TYPES.PRIMARY
    }
  }
);
const Button = React.forwardRef(
  ({ className = "", type, size, ...props }, ref) => {
    const Comp = "button";
    return (
      <Comp
        className={cn(buttonVariants({ type, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants, BUTTON_SIZES, BUTTON_TYPES };
