import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { ProductCard } from './';

import Shirt from '../../../stories/assets/shirt.jpg';

const product = {
  id: '123',
  brand: 'Acme',
  title: 'Limitless Shirt',
  collection: 'Apparel',
  rating: 4.2,
  numRatings: 23,
  currency: 'USD',
  price: 25,
  salePrice: 20,
  image: Shirt,
  href: 'https://bloomreach.com',
};

describe('ProductCard', () => {
  it('should render successfully', () => {
    const { container: { firstElementChild } } = render(
      <ProductCard.Root>
        <ProductCard.Header>
          <img src={product.image} alt={product.title} />
        </ProductCard.Header>
        <ProductCard.Body>
          <ProductCard.Title>{product.title}</ProductCard.Title>
          <ProductCard.SubTitle>{product.collection}</ProductCard.SubTitle>
        </ProductCard.Body>
        <ProductCard.Footer>
        <ProductCard.Price currency={product.currency} price={product.price} />
          <ProductCard.Button variant="primary">Add to cart</ProductCard.Button>
        </ProductCard.Footer>
      </ProductCard.Root>
    );

    expect(firstElementChild).toMatchSnapshot();
  });
});
