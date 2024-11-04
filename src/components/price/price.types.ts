import { HTMLProps } from "react";

export interface PriceProps extends Omit<HTMLProps<HTMLSpanElement>, 'value'> {
  value: number,
  currency?: string,
  locale?: string,
}
