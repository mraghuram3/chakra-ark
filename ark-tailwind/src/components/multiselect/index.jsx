import * as React from "react";

import { ChevronDownIcon, CircleXIcon } from "lucide-react";
import { Portal, Select as SelectPrimitive } from "@ark-ui/react";

import { cn } from "../../lib/utils";

import styles from "./style.module.css";

export const MultiSelect = () => {
  const items = ["React", "Solid", "Vue"];
  return (
    <SelectPrimitive.Root items={items} multiple>
      <SelectPrimitive.Control className="relative w-full">
        <SelectPrimitive.Trigger className="flex items-center justify-between w-full px-12 py-8 text-2xl font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
          <SelectPrimitive.ValueText
            placeholder="Select a Framework"
            className="truncate"
          />
          <span className="flex items-center gap-12">
            <SelectPrimitive.ClearTrigger className="flex items-center justify-center p-1 text-gray-400 hover:text-gray-500">
              <CircleXIcon className="w-12 h-12" />
            </SelectPrimitive.ClearTrigger>
            <SelectPrimitive.Indicator className="flex items-center justify-center p-1 text-gray-400">
              <ChevronDownIcon className="w-12 h-12" />
            </SelectPrimitive.Indicator>
          </span>
        </SelectPrimitive.Trigger>
      </SelectPrimitive.Control>
      <Portal>
        <SelectPrimitive.Positioner className="z-50">
          <SelectPrimitive.Content className={`mt-1 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${styles.content}`}>
            <SelectPrimitive.ItemGroup className="py-1">
              {items.map((item) => (
                <SelectPrimitive.Item
                  key={item}
                  item={item}
                  className="relative flex items-center justify-between px-8 py-8 text-2xl text-gray-700 cursor-pointer hover:bg-gray-100 focus:bg-gray-100"
                >
                  <SelectPrimitive.ItemText>{item}</SelectPrimitive.ItemText>
                  <SelectPrimitive.ItemIndicator className="flex items-center justify-center text-indigo-500">
                    ✓
                  </SelectPrimitive.ItemIndicator>
                </SelectPrimitive.Item>
              ))}
            </SelectPrimitive.ItemGroup>
          </SelectPrimitive.Content>
        </SelectPrimitive.Positioner>
      </Portal>
      <SelectPrimitive.HiddenSelect />
    </SelectPrimitive.Root>
  );
};
