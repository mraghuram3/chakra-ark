import { Button, BUTTON_SIZES, BUTTON_TYPES } from "../components/button";

import styles from "./styles.module.css";

export const ButtonPage = () => {
  return (
    <div className={styles.buttonParent}>
      <div className={styles.buttonContent}>
        <ButtonSizeComp />
        <ButtonTypeComp />
      </div>
    </div>
  );
};

export const ButtonSizeComp = () => {
  return (
    <div className={styles.buttonSize}>
      <p className="small">Size Variants</p>
      <Button size={BUTTON_SIZES.SMALL}>Button</Button>
      <Button size={BUTTON_SIZES.MEDIUM}>Button</Button>
      <Button size={BUTTON_SIZES.BASE}>Button</Button>
      <Button size={BUTTON_SIZES.LARGE}>Button</Button>
    </div>
  );
};

export const ButtonTypeComp = () => {
  return (
    <div className={styles.buttonVariant}>
      <p className="small">Type Variants</p>
      <Button type={BUTTON_TYPES.PRIMARY}>Button</Button>
      <Button type={BUTTON_TYPES.SECONDARY}>Button</Button>
      <Button type={BUTTON_TYPES.TERTIARY}>Button</Button>
      <Button type={BUTTON_TYPES.PLAIN}>Button</Button>
      <Button type={BUTTON_TYPES.ERROR} className="text-gray-700">
        Button
      </Button>
    </div>
  );
};
