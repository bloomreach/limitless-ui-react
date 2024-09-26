import cn from 'clsx';
import { ForwardedRef, forwardRef, ReactElement } from 'react';

import type { ProductCardProps } from '../product-card.types';

export const ProductCardHeader = forwardRef((
    props: ProductCardProps,
    forwardedRef: ForwardedRef<HTMLDivElement> | null,
  ): ReactElement => {
    const {
      className,
      children,
      ...rest
    } = props;

    return (
      <header
        {...rest}
        className={cn('lui-product-card-header', className)}
        ref={forwardedRef}
      >
        {children}
      </header>
    );
  });

  ProductCardHeader.displayName = "ProductCard.Header";
