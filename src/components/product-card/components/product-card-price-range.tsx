import cn from 'clsx';
import { ForwardedRef, forwardRef, ReactElement } from 'react';
import { formatPrice } from '../../../utils/format-price';

import type { ProductCardPriceRangeProps } from '../product-card.types';

export const ProductCardPriceRange = forwardRef((
    props: ProductCardPriceRangeProps,
    forwardedRef: ForwardedRef<HTMLDivElement> | null,
  ): ReactElement => {
    const {
      className,
      children,
      from,
      to,
      currency,
      ...rest
    } = props;

    return (
        <div {...rest} className={cn('lcui-product-card-price-range', className)} ref={forwardedRef}>
            <span className="lcui-product-card-price-value">{formatPrice(from, currency)}</span>
            <span className="lcui-product-card-price-value">&ndash;</span>
            <span className="lcui-product-card-price-value">{formatPrice(to, currency)}</span>
        </div>
    );
  });

  ProductCardPriceRange.displayName = "ProductCard.PriceRange";
