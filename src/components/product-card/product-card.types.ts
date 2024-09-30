import { HTMLProps, ButtonHTMLAttributes, PropsWithChildren } from 'react';

export interface ProductCardProps extends PropsWithChildren, HTMLProps<HTMLDivElement> {
  /**
   * Custom class name for the container of the component.
   */
  className?: string;
}

export interface ProductCardButtonProps extends PropsWithChildren, ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Custom class name for the container of the component.
   */
  className?: string;

  variant?: string
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

export interface ProductCardImageProps extends HTMLProps<HTMLImageElement> {
  className?: string;
  src: string,
  alt: string,
}
