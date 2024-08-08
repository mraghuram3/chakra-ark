import * as React from "react";
import { ChevronDownIcon } from "lucide-react";
import { Accordion as AccordionPrimitive } from "@ark-ui/react";

import { cn } from "../../lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
));
AccordionItem.displayName = AccordionPrimitive.Item.displayName;

const AccordionItemTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.ItemTrigger
      ref={ref}
      className={cn(
        "base-600 flex w-full items-center justify-between py-4 font-medium transition-all",
        className
      )}
      {...props}
    >
      {children}
    </AccordionPrimitive.ItemTrigger>
  )
);
AccordionItemTrigger.displayName = AccordionPrimitive.ItemTrigger.displayName;

const AccordionItemIndicator = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.ItemIndicator
      ref={ref}
      className={`transition-all [&[data-state=open]>svg]:rotate-180 ${className}`}
      {...props}
    >
      {children ? children : <ChevronDownIcon />}
    </AccordionPrimitive.ItemIndicator>
  )
);

AccordionItemIndicator.displayName =
  AccordionPrimitive.ItemIndicator.displayName;

const AccordionItemContent = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.ItemContent
      ref={ref}
      className="small overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.ItemContent>
  )
);

AccordionItemContent.displayName = AccordionPrimitive.ItemContent.displayName;

export {
    Accordion, AccordionItem, AccordionItemIndicator, AccordionItemTrigger, AccordionItemContent 
}