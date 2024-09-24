import cn from 'clsx';
import { ForwardedRef, forwardRef, ReactElement } from 'react';

import type { ProductCardProps } from '../product-card.types';

export const ProductCardBody = forwardRef((
    props: ProductCardProps,
    forwardedRef: ForwardedRef<HTMLDivElement> | null,
  ): ReactElement => {
    const {
      className,
      children,
      ...rest
    } = props;
  
    return (
      <section
        {...rest}
        className={cn('lcui-product-card-main', className)}
        ref={forwardedRef}
      >
        {children}
      </section>
    );
  });
  ProductCardBody.displayName = "ProductCard.Body";