import { ChevronDownIcon } from "lucide-react";
import { Accordion } from "@ark-ui/react";

import { cn } from "../../lib/utils";

export const AccordionComp = ({ className }) => {
  return (
    <Accordion.Root
      defaultValue={["React"]}
      className={cn("border-b", className)}
    >
      {["React", "Solid", "Vue"].map((item) => (
        <Accordion.Item key={item} value={item} className="">
          <Accordion.ItemTrigger
            className={cn(
              "base-600 flex flex-1 items-center justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180",
              className
            )}
          >
            What is {item}?
            <Accordion.ItemIndicator>
              <ChevronDownIcon />
            </Accordion.ItemIndicator>
          </Accordion.ItemTrigger>
          <Accordion.ItemContent className="small overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            {item} is a JavaScript library for building user interfaces.
          </Accordion.ItemContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};
