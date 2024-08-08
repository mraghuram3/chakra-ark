import * as React from "react";
import { Progress as ProgressPrimitive } from "@ark-ui/react";

import { cn } from "../../lib/utils";

import styles from "./style.module.css";

const Progress = React.forwardRef(
  ({ className, trackClassName, indicatorClassName, ...props }, ref) => (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(styles.progressContainer, className)}
      {...props}
    >
      {/* <ProgressPrimitive.Label>Label</ProgressPrimitive.Label>
      <ProgressPrimitive.ValueText /> */}
      <ProgressPrimitive.Track
        className={`${styles.progressTrack} ${trackClassName}`}
      >
        <ProgressPrimitive.Range
          className={`${styles.progressRange} ${indicatorClassName}`}
        />
      </ProgressPrimitive.Track>
    </ProgressPrimitive.Root>
  )
);
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
