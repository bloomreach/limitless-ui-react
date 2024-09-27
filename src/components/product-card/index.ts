import { ProductCardRoot } from "./components/product-card-root";
import { ProductCardHeader } from "./components/product-card-header";
import { ProductCardBody } from "./components/product-card-body";
import { ProductCardFooter } from "./components/product-card-footer";
import { ProductCardTitle } from "./components/product-card-title";
import { ProductCardSubTitle } from "./components/product-card-subtitle";
import { ProductCardLabel } from "./components/product-card-label";
import { ProductCardButton } from "./components/product-card-button";
import { ProductCardBadge } from "./components/product-card-badge";
import { ProductCardPrice } from "./components/product-card-price";
import { ProductCardPriceRange } from "./components/product-card-price-range";
import { ProductCardFavoriteButton } from "./components/product-card-favorite-button";
import { ProductCardImage } from "./components/product-card-image";

export const ProductCard = {
  Root: ProductCardRoot,
  Header: ProductCardHeader,
  Image: ProductCardImage,
  Body: ProductCardBody,
  Footer: ProductCardFooter,
  Title: ProductCardTitle,
  SubTitle: ProductCardSubTitle,
  Label: ProductCardLabel,
  Price: ProductCardPrice,
  PriceRange: ProductCardPriceRange,
  Button: ProductCardButton,
  Badge: ProductCardBadge,
  FavoriteButton: ProductCardFavoriteButton,
};

export type {
  ProductCardProps,
  ProductCardPriceProps,
  ProductCardPriceRangeProps,
  ProductCardImageProps,
} from "./product-card.types";
