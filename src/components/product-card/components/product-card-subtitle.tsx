import cn from 'clsx';
import { ForwardedRef, forwardRef, ReactElement } from 'react';

import type { ProductCardProps } from '../product-card.types';

export const ProductCardSubTitle = forwardRef((
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
        className={cn('lcui-product-card-subtitle', className)}
        ref={forwardedRef}
      >
        {children}
      </div>
    );
  });
  ProductCardSubTitle.displayName = "ProductCard.SubTitle";