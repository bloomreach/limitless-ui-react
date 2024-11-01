import { HTMLProps } from "react";

export interface CurrencyProps extends HTMLProps<HTMLSpanElement> {
  currency?: string,
  locale?: string,
}
