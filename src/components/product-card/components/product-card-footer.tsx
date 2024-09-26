import cn from 'clsx';
import { ForwardedRef, forwardRef, ReactElement } from 'react';

import type { ProductCardProps } from '../product-card.types';

export const ProductCardFooter = forwardRef((
    props: ProductCardProps,
    forwardedRef: ForwardedRef<HTMLDivElement> | null,
  ): ReactElement => {
    const {
      className,
      children,
      ...rest
    } = props;

    return (
      <footer
        {...rest}
        className={cn('lui-product-card-footer', className)}
        ref={forwardedRef}
      >
        {children}
      </footer>
    );
  });
  ProductCardFooter.displayName = "ProductCard.Footer";
