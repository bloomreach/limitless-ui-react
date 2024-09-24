import cn from 'clsx';
import { ForwardedRef, forwardRef, ReactElement } from 'react';

import type { ProductCardProps } from '../product-card.types';

export const ProductCardButton = forwardRef((
    props: ProductCardProps & {variant?: string},
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
        className={cn('lcui-product-card-btn', `lcui-product-card-btn--${variant}`, className)}
        ref={forwardedRef}
      >
        {children}
      </button>
    );
  });
  ProductCardButton.displayName = "ProductCard.Button";
