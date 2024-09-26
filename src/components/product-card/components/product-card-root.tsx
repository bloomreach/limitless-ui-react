import cn from 'clsx';
import { ForwardedRef, forwardRef, ReactElement } from 'react';

import type { ProductCardProps } from '../product-card.types';
import '../product-card.scss';

/**
 * Component to display products in a product grid
 *
 * ### Usage
 *
 * ```tsx
 * import { ProductCard } from '@bloomreach/limitless-ui-react';
 *
 * <ProductCard.Root>
 *   <ProductCard.Header>
 *     <ProductCard.Image src={product.image} alt={product.title} />
 *   </ProductCard.Header>
 *   <ProductCard.Body>
 *     <ProductCard.Title>{product.title}</ProductCard.Title>
 *     <ProductCard.SubTitle>{product.collection}</ProductCard.SubTitle>
 *   </ProductCard.Body>
 *   <ProductCard.Footer>
 *     <ProductCard.Price currency={product.currency} price={product.price} />
 *     <ProductCard.Button variant="primary">Add to cart</ProductCard.Button>
 *   </ProductCard.Footer>
 * </ProductCard.Root>
 * ```
 */
export const ProductCardRoot = forwardRef((
  props: ProductCardProps,
  forwardedRef: ForwardedRef<HTMLDivElement> | null,
): ReactElement => {
  const {
    className,
    children,
    ...rest
  } = props;

  return (
    <article
      {...rest}
      className={cn('lui-product-card', className)}
      ref={forwardedRef}
    >
      {children}
    </article>
  );
});

ProductCardRoot.displayName = "ProductCard.Root";
