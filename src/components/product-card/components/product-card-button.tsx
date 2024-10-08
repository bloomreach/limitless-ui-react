import cn from 'clsx';
import { ForwardedRef, forwardRef, ReactElement } from 'react';

import type { ProductCardButtonProps } from '../product-card.types';

export const ProductCardButton = forwardRef((
    props: ProductCardButtonProps,
    forwardedRef: ForwardedRef<HTMLButtonElement> | null,
  ): ReactElement => {
    const {
      className,
      children,
      variant,
      ...rest
    } = props;

    return (
      <button
        {...rest}
        className={cn('lui-product-card-btn', `lui-product-card-btn--${variant}`, className)}
        ref={forwardedRef}
      >
        {children}
      </button>
    );
  });
  ProductCardButton.displayName = "ProductCard.Button";
