import { PropsWithChildren } from 'react';

export interface ProductCardProps extends PropsWithChildren {
  /**
   * Custom class name for the container of the component.
   */
  className?: string;
}

export interface ProductCardPriceProps extends ProductCardProps {
  price: number,
  salePrice?: number,
  currency?: string,
  locale?: string,
}

export interface ProductCardPriceRangeProps extends ProductCardProps {
  from: number,
  to: number,
  currency?: string,
  locale?: string,
}

export interface ProductCardImageProps extends Omit<ProductCardProps, 'children'> {
  src: string,
  alt: string,
}
