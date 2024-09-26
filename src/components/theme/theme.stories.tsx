import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ProductCard } from '../product-card';
import { SwatchBar } from '../swatch-bar';

import Shirt from '../../../stories/assets/shirt.jpg';
import RedShirt from '../../../stories/assets/red-shirt.jpg';
import BlueShirt from '../../../stories/assets/blue-shirt.jpg';
import GreenShirt from '../../../stories/assets/green-shirt.jpg';
import ChocolateShirt from '../../../stories/assets/chocolate-shirt.jpg';
import { Theme } from './';

const meta: Meta<typeof Theme> = {
  title: 'COMPONENTS/Theme',
  component: Theme,
  tags: ['autodocs'],
  args: {
    /**
     * For the component properties which has `ReactNode` type set the default value as empty string
     * because the Storybook doesn't allow editing the `ReactNode` type properties in the controls.
     */
  },
};

export default meta;

export type Story = StoryObj<typeof Theme>;

const product = {
  id: '123',
  brand: 'Acme',
  title: 'Limitless Shirt',
  collection: 'Apparel',
  rating: 4.2,
  numRatings: 23,
  price: 25,
  image: Shirt,
  href: 'https://bloomreach.com',
  variants: [{
    id: '4',
    title: 'Red',
    color: 'red',
    image: RedShirt
  }, {
    id: '5',
    title: 'Chocolate',
    color: 'chocolate',
    image: ChocolateShirt
  }, {
    id: '6',
    title: 'Blue',
    color: 'skyblue',
    image: BlueShirt
  }, {
    id: '7',
    title: 'Green',
    color: 'green',
    image: GreenShirt
  }]
};

export const Basic: Story = {
  render: (args) => {
    const [sku, setSku] = useState<string | undefined>();
    const [preview, setPreview] = useState<string | undefined>();
    const [pressed, setPressed] = useState<boolean>(false);

    function setSwatch(id: string) {
      setSku(id);
      setPreview(product.variants.find(v => v.id === id)?.image);
    }

    return (
      <div style={{width: '300px'}}>
        <Theme {...args}>
          <ProductCard.Root>
            <ProductCard.Header>
              <img src={preview || product.image} alt={product.title} />
              <ProductCard.FavoriteButton pressed={pressed} onClick={() => setPressed(!pressed)} />
            </ProductCard.Header>
            <ProductCard.Body>
              <SwatchBar.Root>
                <SwatchBar.SwatchGroup value={sku} onValueChange={(newValue) => setSwatch(newValue)}>
                {
                  product.variants.map((swatch) => {
                    return <SwatchBar.SwatchColor key={swatch.id} value={swatch.id} color={swatch.color} />
                  })
                }
                </SwatchBar.SwatchGroup>
              </SwatchBar.Root>
              <ProductCard.Badge>Special Edition</ProductCard.Badge>
              <ProductCard.Title>{product.title}</ProductCard.Title>
              <ProductCard.SubTitle>{product.collection}</ProductCard.SubTitle>
            </ProductCard.Body>
            <ProductCard.Footer>
            <ProductCard.Price price={product.price} salePrice={product.price - 10} />
              <ProductCard.Button variant="primary">Add to cart</ProductCard.Button>
            </ProductCard.Footer>
          </ProductCard.Root>
        </Theme>
      </div>
    );
  },
};
