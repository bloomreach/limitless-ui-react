import cn from 'clsx';
import { ForwardedRef, forwardRef, ReactElement, useMemo } from 'react';
import { useTheme } from '../../theme';
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
      locale,
      ...rest
    } = props;
    const { currency: gCurrency, locale: gLocale } = useTheme();
    const _currency = useMemo(() => currency || gCurrency || undefined, [currency, gCurrency]);
    const _locale = useMemo(() => locale || gLocale || undefined, [locale, gLocale]);

    return (
      <div {...rest} className={cn('lui-product-card-price-range', className)} ref={forwardedRef}>
        <span className="lui-product-card-price-value">{formatPrice(from, _currency, _locale)}</span>
        <span className="lui-product-card-price-value">&ndash;</span>
        <span className="lui-product-card-price-value">{formatPrice(to, _currency, _locale)}</span>
      </div>
    );
  });

  ProductCardPriceRange.displayName = "ProductCard.PriceRange";
