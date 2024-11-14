import { HTMLProps } from "react";

export interface NumberProps extends Omit<HTMLProps<HTMLSpanElement>, 'value'> {
  value: number,
  locale?: string,
}
