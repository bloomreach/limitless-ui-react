import cn from 'clsx';
import { ForwardedRef, forwardRef, ReactElement } from 'react';

import type { ProductCardImageProps } from '../product-card.types';

export const ProductCardImage = forwardRef((
    props: ProductCardImageProps,
    forwardedRef: ForwardedRef<HTMLImageElement> | null,
  ): ReactElement => {
    const {
      className,
      src,
      alt,
      ...rest
    } = props;

    return (
      <img
        {...rest}
        src={src}
        alt={alt}
        className={cn('lui-product-card-image', className)}
        ref={forwardedRef}
      />
    );
  });
  ProductCardImage.displayName = "ProductCard.Image";
