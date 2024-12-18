import { RangeRoot } from "./components/range-root";
import { RangeMinInput } from "./components/range-min-input";
import { RangeMaxInput } from "./components/range-max-input";
import { RangeSlider } from "./components/range-slider";
import { RangeInputs } from "./components/range-inputs";
import { RangeUpdateButton } from "./components/range-update-button";
import { RangeSeparator } from "./components/range-separator";
import { RangeProvider } from "./range.context";
import { RangeMaxValue } from "./components/range-max-value";
import { RangeMinValue } from "./components/range-min-value";

export const Range = {
  Root: RangeRoot,
  Provider: RangeProvider,
  MinInput: RangeMinInput,
  MaxInput: RangeMaxInput,
  Slider: RangeSlider,
  Inputs: RangeInputs,
  Separator: RangeSeparator,
  UpdateButton: RangeUpdateButton,
  MinValue: RangeMinValue,
  MaxValue: RangeMaxValue,
};

export {
  useRange
} from './range.context';

export type {
  RangeProps,
  RangeRootProps,
  RangeProviderProps,
  RangeContextProps,
  RangeButtonProps,
  RangeInputProps,
  RangeInputsProps,
  RangeValueProps,
} from './range.types';
