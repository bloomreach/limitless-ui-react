import { CheckboxGroupRoot } from "./components/checkbox-group-root";
import { CheckboxGroupItem } from "./components/checkbox-group-item";
import { CheckboxGroupOverflow } from "./components/checkbox-group-overflow";
import { CheckboxGroupOverflowTrigger } from "./components/checkbox-group-overflow-trigger";
import { CheckboxGroupOverflowContent } from "./components/checkbox-group-overflow-content";

export const CheckboxGroup = {
  Root: CheckboxGroupRoot,
  Item: CheckboxGroupItem,
  Overflow: CheckboxGroupOverflow,
  OverflowContent: CheckboxGroupOverflowContent,
  OverflowTrigger: CheckboxGroupOverflowTrigger
};

export {
  useCheckboxGroup
} from './checkbox-group.context';

export type {
  CheckboxGroupProps,
  CheckboxGroupRootProps,
  CheckboxGroupItemProps,
  CheckboxGroupOverflowProps,
  CheckboxGroupOverflowContentProps,
  CheckboxGroupOverflowTriggerProps,
  CheckboxGroupProviderProps,
  CheckboxGroupContextProps
} from './checkbox-group.types'
