import { useArgs } from '@storybook/preview-api';
import { Meta, StoryObj } from '@storybook/react';
import { ChangeEvent } from 'react';

import { ProductCard } from '../../components';
import { Theme } from '../../components/theme';
import { useSearch } from './use-search';
import { UseSearchStoryComponent } from './use-search.story-component';
import type { UseSearchOptions } from './use-search.types';

const meta: Meta<typeof UseSearchStoryComponent> = {
  title: 'HOOKS/useSearch',
  component: UseSearchStoryComponent,
  tags: ['autodocs'],
  args: {},
};

export default meta;

export type Story = StoryObj<typeof UseSearchStoryComponent>;

export const Basic: Story = {
  render: (args) => {
    const [{ searchOptions: argsSearchOptions }, updateArgs] = useArgs();
    const { searchType, configuration, searchOptions } = args;

    const { response, error, loading } = useSearch(
      searchType,
      args.query,
      configuration,
      searchOptions,
    );

    function onChange(e: ChangeEvent<HTMLInputElement>) {
      const q = e.target.value;
      updateArgs({ searchOptions: { ...(argsSearchOptions as UseSearchOptions), ...{ q } } });
    }

    return (
      <Theme>
        <input
          type="text"
          aria-label="query"
          placeholder="Type a search query"
          value={args.query}
          onChange={onChange}
        />
        {response?.response ? (
          <>
            <div style={{ fontSize: '0.85rem', opacity: 0.6, margin: '1rem 0' }}>
              {response.response.numFound} items
            </div>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              {response.response.docs?.map((product) => {
                return (
                  <ProductCard.Root style={{ width: '250px' }} key={product.pid}>
                    <ProductCard.Header>
                      <ProductCard.Image
                        style={{ minHeight: '250px' }}
                        src={product.thumb_image}
                        alt={product.title}
                      />
                    </ProductCard.Header>
                    <ProductCard.Body>
                      <ProductCard.Title>{product.title}</ProductCard.Title>
                      <ProductCard.SubTitle>{product.brand}</ProductCard.SubTitle>
                    </ProductCard.Body>
                    <ProductCard.Footer>
                      <ProductCard.Price price={product.price} salePrice={product.sale_price} />
                      <ProductCard.Button variant="primary">Add to cart</ProductCard.Button>
                    </ProductCard.Footer>
                  </ProductCard.Root>
                );
              })}
            </div>
          </>
        ) : null}
      </Theme>
    );
  },
  args: {
    configuration: {
      account_id: 7634,
      domain_key: 'showcase_pacifichome',
    },
    searchType: 'product',
    searchOptions: {
      _br_uid_2: 'test',
      fl: 'pid,title,thumb_image,brand,price,sale_price',
      rows: 3,
      start: 0,
      sort: '',
      url: 'https://example.com',
      'facet.version': '3.0',
    },
    query: 'Chair,',
  },
};
