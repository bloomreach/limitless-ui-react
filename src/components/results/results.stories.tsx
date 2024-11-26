import { Meta, StoryObj } from '@storybook/react';
import {
  Configuration,
  ProductSearchOptions,
  SearchResponseDoc,
} from '@bloomreach/discovery-web-sdk';
import { SearchBox } from '../search-box';
import { Results } from './results';
import { LimitlessUIProvider } from '../../contexts/limitless-ui.provider';
import { Theme } from '../theme';
import { ProductCard } from '../product-card';

const meta: Meta<typeof Results> = {
  title: 'COMPONENTS/Results',
  component: Results,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;

export type Story = StoryObj<typeof Results>;

// Default configuration for stories
const configuration: Configuration = {
  account_id: 7634,
  auth_key: 'zjlc0tsp2xu7l7ro',
  domain_key: 'showcase_pacifichome',
};

const searchOptions: Omit<ProductSearchOptions, 'q'> = {
  _br_uid_2: 'test',
  fl: 'pid,title,description,price,sale_price,thumb_image',
  rows: 12,
  start: 0,
  url: 'https://example.com',
  'facet.version': '3.0',
};

// Product card result component
const ProductCardResult = ({ result }: { result: SearchResponseDoc }) => (
  <ProductCard.Root key={result.pid}>
    <ProductCard.Header>
      <ProductCard.Image
        src={result.thumb_image || 'https://via.placeholder.com/300'}
        alt={result.title}
      />
    </ProductCard.Header>
    <ProductCard.Body>
      <ProductCard.Title>{result.title}</ProductCard.Title>
      <ProductCard.SubTitle>{result.brand}</ProductCard.SubTitle>
    </ProductCard.Body>
    <ProductCard.Footer>
      <ProductCard.Price price={result.price} salePrice={result.sale_price} currency="USD" />
      <ProductCard.Button variant="primary">View Product</ProductCard.Button>
    </ProductCard.Footer>
  </ProductCard.Root>
);

// Simple list result component as alternative
const ListResult = ({ result }: { result: SearchResponseDoc }) => (
  <div key={result.pid}>
    <h2>{result.title}</h2>
    <p>{result.description}</p>
    <div>Price: ${result.price}</div>
  </div>
);

export const Basic: Story = {
  render: (args) => {
    return (
      <Theme>
        <LimitlessUIProvider>
          <SearchBox.Root
            configuration={configuration}
            searchOptions={searchOptions}
            searchType="product"
            autoQuery
            labels={{
              placeholder: 'Search products...',
              submit: 'Search',
              reset: 'Clear',
            }}
          />
          <Results {...args} />
        </LimitlessUIProvider>
      </Theme>
    );
  },
  args: {
    resultComponent: ProductCardResult,
  },
  argTypes: {
    resultComponent: {
      options: ['productCard', 'list'],
      mapping: {
        productCard: ProductCardResult,
        list: ListResult,
      },
      control: {
        type: 'radio',
        labels: {
          productCard: 'Product Card Layout',
          list: 'List Layout',
        },
      },
    },
  },
};
