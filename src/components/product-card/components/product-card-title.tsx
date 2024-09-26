import cn from 'clsx';
import { ForwardedRef, forwardRef, ReactElement } from 'react';

import type { ProductCardProps } from '../product-card.types';

export const ProductCardTitle = forwardRef((
    props: ProductCardProps,
    forwardedRef: ForwardedRef<HTMLDivElement> | null,
  ): ReactElement => {
    const {
      className,
      children,
      ...rest
    } = props;

    return (
      <div
        {...rest}
        className={cn('lui-product-card-title', className)}
        ref={forwardedRef}
      >
        {children}
      </div>
    );
  });
  ProductCardTitle.displayName = "ProductCard.Title";
