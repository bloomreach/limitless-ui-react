import cn from 'clsx';
import { ForwardedRef, forwardRef, ReactElement } from 'react';
import { formatPrice } from '../../../utils/format-price';

import type { ProductCardPriceProps } from '../product-card.types';

export const ProductCardPrice = forwardRef((
    props: ProductCardPriceProps,
    forwardedRef: ForwardedRef<HTMLDivElement> | null,
  ): ReactElement => {
    const {
      className,
      children,
      price,
      salePrice,
      currency,
      ...rest
    } = props;

    const hasDiscount = price && salePrice && price !== salePrice;

    if (!hasDiscount) {
      return (
        <div {...rest} className={cn('lcui-product-card-price', className)} ref={forwardedRef}>
          <span className="lcui-product-card-price-value">{formatPrice(price, currency)}</span>
        </div>
      );
    }

    return (
      <div {...rest} className={cn('lcui-product-card-price', className)} ref={forwardedRef}>
        {price ? <span className="lcui-product-card-price-value--crossed">{formatPrice(price, currency)}</span> : null}
        <span className="lcui-product-card-price-value--sale">{formatPrice(salePrice, currency)}</span>
      </div>
    );
  });

  ProductCardPrice.displayName = "ProductCard.Price";
