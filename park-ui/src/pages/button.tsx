
import { ArrowRightIcon } from 'lucide-react'
import { Button,  } from '~/components/ui/button'

import { css } from "../../styled-system/css";


const BUTTON_SIZES = {
    TINY: "xs",
    SMALL: "sm",
    MEDIUM: "md",
    LARGE: "lg"
}

const BUTTON_VARIANTS = {
    SOLID: "solid",
    SUBTLE: "subtle",
    OUTLINE: "outline",
    GHOST: "outline"
}

export const ButtonPage = () => {
  return (

    <div
    className={css({
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        gap: "12px",
        background:"white"
      })}
    >
        <ButtonSizeComp />
        <ButtonTypeComp />
    </div>
  )
}

export const ButtonSizeComp = () => {
    return (
      <div className="grid justify-items-start gap-20">
        <p className="small">Size Variants</p>
        <Button size={BUTTON_SIZES.TINY}>Button</Button>
        <Button size={BUTTON_SIZES.SMALL}>Button</Button>
        <Button size={BUTTON_SIZES.MEDIUM}>Button</Button>
        <Button size={BUTTON_SIZES.LARGE}>Button</Button>
      </div>
    );
  };
  
  export const ButtonTypeComp = () => {
    return (
      <div className="grid justify-items-start gap-20">
        <p className="small">Type Variants</p>
        <Button variant={BUTTON_VARIANTS.SOLID}>Button</Button>
        <Button variant={BUTTON_VARIANTS.SUBTLE}>Button</Button>
        <Button variant={BUTTON_VARIANTS.OUTLINE}>Button</Button>
        <Button variant={BUTTON_VARIANTS.GHOST}>
          Button
        </Button>
      </div>
    );
  };
  