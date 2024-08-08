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
    <div className="grid justify-center">
      <AccordionComp />
      <AccordionComp2 />
    </div>
  );
};

export const AccordionComp = () => {
  return (
    <div className="grid">
      <div className="small">Default</div>
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
    <div className="grid">
      <div className="small">custom</div>
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
