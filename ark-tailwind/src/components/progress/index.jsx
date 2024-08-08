import * as React from "react";
import { Progress as ProgressPrimitive } from "@ark-ui/react";

import { cn } from "../../lib/utils";

const Progress = React.forwardRef(
  ({ className, trackClassName, indicatorClassName, ...props }, ref) => (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn("relative w-full", className)}
      {...props}
    >
      {/* <ProgressPrimitive.Label>Label</ProgressPrimitive.Label>
      <ProgressPrimitive.ValueText /> */}
      <ProgressPrimitive.Track
        className={`rounded-full relative ${
          trackClassName ? trackClassName : "bg-gray-400"
        }`}
      >
        <ProgressPrimitive.Range
          className={cn(
            "h-10 rounded-full  flex-1 transition-all bg-primary-500",
            indicatorClassName
          )}
        />
      </ProgressPrimitive.Track>
    </ProgressPrimitive.Root>
  )
);
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
