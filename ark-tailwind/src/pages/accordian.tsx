import {
  Accordion,
  AccordionItem,
  AccordionItemIndicator,
  AccordionItemTrigger,
  AccordionItemContent,
} from "../components/accordian";

import { AlertTriangle } from "lucide-react";

export const AccordianPage = () => {
  return (
    <div>
      <AccordionComp />
      <AccordionComp2 />
    </div>
  );
};

export const AccordionComp = () => {
  return (
    <div className="flex w-full flex-1 justify-center">
      <Accordion defaultValue={["React"]} multiple>
        {["React", "Solid", "Vue"].map((item) => (
          <AccordionItem key={item} value={item}>
            <AccordionItemTrigger>
              What is {item}?
              <AccordionItemIndicator />
            </AccordionItemTrigger>
            <AccordionItemContent>
              {item} is a JavaScript library for building user interfaces.
            </AccordionItemContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export const AccordionComp2 = () => {
  return (
    <div className="flex w-full flex-1 justify-center">
      <Accordion defaultValue={["React"]} multiple>
        {["React", "Solid", "Vue"].map((item) => (
          <AccordionItem key={item} value={item}>
            <AccordionItemTrigger>
              What is {item}?
              <AccordionItemIndicator>
                <AlertTriangle />
              </AccordionItemIndicator>
            </AccordionItemTrigger>
            <AccordionItemContent>
              {item} is a JavaScript library for building user interfaces.
            </AccordionItemContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
