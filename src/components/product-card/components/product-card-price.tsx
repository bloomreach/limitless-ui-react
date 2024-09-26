import cn from 'clsx';
import { ForwardedRef, forwardRef, ReactElement, useMemo } from 'react';
import { useTheme } from '../../theme';
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
      locale,
      ...rest
    } = props;

    const { currency: gCurrency, locale: gLocale } = useTheme();
    const hasDiscount = useMemo(() => price && salePrice && price !== salePrice, [price, salePrice]);
    const _currency = useMemo(() => currency || gCurrency || undefined, [currency, gCurrency]);
    const _locale = useMemo(() => locale || gLocale || undefined, [locale, gLocale]);

    if (!hasDiscount) {
      return (
        <div {...rest} className={cn('lui-product-card-price', className)} ref={forwardedRef}>
          <span className="lui-product-card-price-value">{formatPrice(price, _currency, _locale)}</span>
        </div>
      );
    }

    return (
      <div {...rest} className={cn('lui-product-card-price', className)} ref={forwardedRef}>
        {price ? <span className="lui-product-card-price-value lui-product-card-price-value--crossed">{formatPrice(price, _currency, _locale)}</span> : null}
        {salePrice ? <span className="lui-product-card-price-value lui-product-card-price-value--sale">{formatPrice(salePrice, _currency, _locale)}</span> : null}
      </div>
    );
  });

  ProductCardPrice.displayName = "ProductCard.Price";
