import * as React from "react";

import { ChevronDownIcon, CircleXIcon } from "lucide-react";
import { Portal, Select as SelectPrimitive } from "@ark-ui/react";

import { cn } from "../../lib/utils";

import styles from "./style.module.css";

export const Select = () => {
  const items = ["React", "Solid", "Vue"];
  return (
    <SelectPrimitive.Root items={items}>
      {/* <SelectPrimitive.Label>Framework</SelectPrimitive.Label> */}
      <SelectPrimitive.Control className={styles.dropdown}>
        <SelectPrimitive.Trigger className={styles.dropdownTrigger}>
          <SelectPrimitive.ValueText placeholder="Select a Framework" />
          <SelectPrimitive.ClearTrigger className={styles.clearTrigger}>
            <CircleXIcon />
          </SelectPrimitive.ClearTrigger>
          <SelectPrimitive.Indicator>
            <ChevronDownIcon />
          </SelectPrimitive.Indicator>
        </SelectPrimitive.Trigger>
      </SelectPrimitive.Control>
      <Portal>
        <SelectPrimitive.Positioner>
          <SelectPrimitive.Content className={styles.dropdownContainer}>
            <SelectPrimitive.ItemGroup>
              {/* <SelectPrimitive.ItemGroupLabel>
                Frameworks
              </SelectPrimitive.ItemGroupLabel> */}
              {items.map((item) => (
                <SelectPrimitive.Item
                  key={item}
                  item={item}
                  className={styles.item}
                >
                  <SelectPrimitive.ItemText>{item}</SelectPrimitive.ItemText>
                  <SelectPrimitive.ItemIndicator>
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
