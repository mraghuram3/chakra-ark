import * as React from "react";
// import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

import styles from "./style.module.css";


const BUTTON_SIZES = {
  BASE: "base",
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
    `${styles.button}`
  ],
  {
    variants: {
      type: {
        [BUTTON_TYPES.PRIMARY]: [
          styles.primary
        ],
        [BUTTON_TYPES.SECONDARY]: [
          styles.secondary
        ],
        [BUTTON_TYPES.TERTIARY]: [
          styles.tertiary
        ],
        [BUTTON_TYPES.PLAIN]: [
          styles.plain
        ],
        [BUTTON_TYPES.ERROR]: [
          styles.error
        ]
      },
      size: {
        [BUTTON_SIZES.BASE]: [
          styles.base
        ],
        [BUTTON_SIZES.SMALL]: [
          styles.small
        ],
        [BUTTON_SIZES.MEDIUM]: [
          styles.medium
        ],
        [BUTTON_SIZES.LARGE]: [
          styles.large
        ]
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
