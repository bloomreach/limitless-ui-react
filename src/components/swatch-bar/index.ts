import { SwatchBarButton } from "./components/swatch-bar-button";
import { SwatchBarLink } from "./components/swatch-bar-link";
import { SwatchBarRoot } from "./components/swatch-bar-root";
import { SwatchBarToggleGroup } from "./components/swatch-bar-toggle-group";
import { SwatchBarToggleItem } from "./components/swatch-bar-toggle-item";
import { SwatchColor } from "./components/swatch-color";
import { SwatchImage } from "./components/swatch-image";
import { SwatchText } from "./components/swatch-text";

export const SwatchBar = {
  Root: SwatchBarRoot,
  SwatchGroup: SwatchBarToggleGroup,
  Link: SwatchBarLink,
  Button: SwatchBarButton,
  SwatchItem: SwatchBarToggleItem,
  SwatchColor: SwatchColor,
  SwatchImage: SwatchImage,
  SwatchText: SwatchText,
}

export type {
  SwatchBarProps,
  SwatchBarSwatchGroupProps,
  SwatchItemProps,
  SwatchColorProps,
  SwatchBarButtonProps,
  SwatchBarLinkProps,
} from "./swatch-bar.types";
