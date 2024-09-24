import {
  ToolbarProps,
  ToolbarToggleGroupSingleProps,
  ToolbarToggleItemProps,
  ToolbarButtonProps,
  ToolbarLinkProps
} from '@radix-ui/react-toolbar';

export interface SwatchBarProps extends ToolbarProps {}

export interface SwatchBarSwatchGroupProps extends Omit<ToolbarToggleGroupSingleProps, 'type'> {}

export interface SwatchItemProps extends ToolbarToggleItemProps {}

export interface SwatchColorProps extends SwatchItemProps {
  /**
   * Color for the swatch to be rendered
   */
  color: string;
}

export interface SwatchBarButtonProps extends ToolbarButtonProps {}

export interface SwatchBarLinkProps extends ToolbarLinkProps {}
