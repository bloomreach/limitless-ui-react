import { Meta, StoryObj } from '@storybook/react';
import { Theme } from '../theme';
import { action } from '@storybook/addon-actions';
import { Number } from '../number';
import { PaginationRoot } from './components/pagination-root';
import { Pagination } from '.';
import { useArgs } from '@storybook/preview-api';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';
import { CSSProperties } from 'react';

const meta: Meta<typeof PaginationRoot> = {
  title: 'COMPONENTS/Pagination',
  component: PaginationRoot,
  tags: ['autodocs'],
  args: {
  },
};

export default meta;

export type Story = StoryObj<typeof PaginationRoot>;

export const Basic: Story = {
  render: (args) => {
    const [_, updateArgs] = useArgs();
    return (
      <Theme>
        <Pagination.Root
          {...args}
          onPageChange={(page: number) => updateArgs({page})}
          onItemsPerPageChange={(itemsPerPage: number) => updateArgs({itemsPerPage})}
        >
          <Pagination.Overview>
            <Pagination.ItemsPerPageSelector />
            <Pagination.Summary />
          </Pagination.Overview>
          <Pagination.Navigation>
            <Pagination.PreviousButton />
            <Pagination.Pages />
            <Pagination.NextButton />
          </Pagination.Navigation>
        </Pagination.Root>
      </Theme>
    );
  },
  args: {
    count: 100,
    page: 1,
    itemsPerPage: 20,
    onPageChange: action('Page changed'),
    onItemsPerPageChange: action('Items per page changed'),
  },
};

export const CustomItemsPerPageOptions: Story = {
  render: (args) => {
    const [_, updateArgs] = useArgs();
    return (
      <Theme>
        <Pagination.Root
          {...args}
          onPageChange={(page: number) => updateArgs({page})}
          onItemsPerPageChange={(itemsPerPage: number) => updateArgs({itemsPerPage})}
        >
          <Pagination.Overview>
            <Pagination.ItemsPerPageSelector />
            <Pagination.Summary />
          </Pagination.Overview>
          <Pagination.Navigation>
            <Pagination.PreviousButton />
            <Pagination.Pages />
            <Pagination.NextButton />
          </Pagination.Navigation>
        </Pagination.Root>
      </Theme>
    );
  },
  args: {
    count: 200,
    page: 2,
    itemsPerPage: 10,
    itemsPerPageOptions: [10, 25, 50, 100],
    onPageChange: action('Page changed'),
    onItemsPerPageChange: action('Items per page changed'),
  },
};

/**
 * When there are fewer items than the items per page, the pages controls are not rendered
 */
export const TooFewItems: Story = {
  render: (args) => {
    const [_, updateArgs] = useArgs();
    return (
      <Theme>
         <Pagination.Root
          {...args}
          onPageChange={(page: number) => updateArgs({page})}
          onItemsPerPageChange={(itemsPerPage: number) => updateArgs({itemsPerPage})}
        >
          <Pagination.Overview>
            <Pagination.ItemsPerPageSelector />
            <Pagination.Summary />
          </Pagination.Overview>
          <Pagination.Navigation>
            <Pagination.PreviousButton />
            <Pagination.Pages />
            <Pagination.NextButton />
          </Pagination.Navigation>
        </Pagination.Root>
      </Theme>
    );
  },
  args: {
    count: 10,
    page: 0,
    itemsPerPage: 10,
    onPageChange: action('Page changed'),
    onItemsPerPageChange: action('Items per page changed'),
  },
};

/**
 * When there are no items, the component is not rendered
 */
export const NoItems: Story = {
  render: (args) => {
    const [_, updateArgs] = useArgs();
    return (
      <Theme>
         <Pagination.Root
          {...args}
          onPageChange={(page: number) => updateArgs({page})}
          onItemsPerPageChange={(itemsPerPage: number) => updateArgs({itemsPerPage})}
        >
          <Pagination.Overview>
            <Pagination.ItemsPerPageSelector />
            <Pagination.Summary />
          </Pagination.Overview>
          <Pagination.Navigation>
            <Pagination.PreviousButton />
            <Pagination.Pages />
            <Pagination.NextButton />
          </Pagination.Navigation>
        </Pagination.Root>
      </Theme>
    );
  },
  args: {
    count: 0,
    page: 0,
    itemsPerPage: 10,
    onPageChange: action('Page changed'),
    onItemsPerPageChange: action('Items per page changed'),
  },
};

/**
 * Wrap the `<Pagination.Root>` or `<Pagination.Provider>` around your search results and you can
 * render multiple instances of the components which share a common state
 */
export const MultipleElements: Story = {
  render: (args) => {
    const [_, updateArgs] = useArgs();

    return (
      <Theme>
        <Pagination.Root
          {...args}
          onPageChange={(page: number) => updateArgs({page})}
          onItemsPerPageChange={(itemsPerPage: number) => updateArgs({itemsPerPage})}
        >
          <div style={{display: 'flex', gap: '2rem', flexDirection: 'column'}}>
            <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
              <Pagination.Summary render={(start, end, total, page, totalPages) => (<Number value={total}> items</Number>)} style={{flex: 1}} />
              <Pagination.Navigation>
                <Pagination.PreviousButton />
                <Pagination.Pages />
                <Pagination.NextButton />
              </Pagination.Navigation>
            </div>
            <div style={{backgroundColor: '#eee', padding: '5rem'}}>
              Show your results here
            </div>
            <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
              <Pagination.Overview>
                <Pagination.ItemsPerPageSelector />
                <Pagination.Summary />
              </Pagination.Overview>
              <Pagination.Navigation>
                <Pagination.PreviousButton />
                <Pagination.Pages />
                <Pagination.NextButton />
              </Pagination.Navigation>
            </div>
          </div>

        </Pagination.Root>
      </Theme>
    );
  },
  args: {
    count: 100,
    page: 0,
    itemsPerPage: 20,
    onPageChange: action('Page changed'),
    onItemsPerPageChange: action('Items per page changed'),
  },
};

export const RTL: Story = {
  render: (args) => {
    const [_, updateArgs] = useArgs();

    return (
      <Theme dir="rtl">
        <Pagination.Root
          {...args}
          onPageChange={(page: number) => updateArgs({page})}
          onItemsPerPageChange={(itemsPerPage: number) => updateArgs({itemsPerPage})}
        >
          <Pagination.Overview>
            <Pagination.ItemsPerPageSelector />
            <Pagination.Summary />
          </Pagination.Overview>
          <Pagination.Navigation>
            <Pagination.PreviousButton />
            <Pagination.Pages />
            <Pagination.NextButton />
          </Pagination.Navigation>
        </Pagination.Root>

      </Theme>
    );
  },
  args: {
    count: 100,
    page: 0,
    itemsPerPage: 10,
    onPageChange: action('Page changed'),
    onItemsPerPageChange: action('Items per page changed'),
  },
};

export const Themes: Story = {
  render: (args) => {
    const [_, updateArgs] = useArgs();

    return (
      <div style={{display: 'flex', gap: '2rem', flexDirection: 'column'}}>
        <Theme
          style={{
            '--lui-pagination__item-background--active': 'rebeccapurple',
          } as CSSProperties}
        >
          <Pagination.Root
            {...args}
            onPageChange={(page: number) => updateArgs({page})}
            onItemsPerPageChange={(itemsPerPage: number) => updateArgs({itemsPerPage})}
          >
            <Pagination.Overview>
              <Pagination.ItemsPerPageSelector />
              <Pagination.Summary />
            </Pagination.Overview>
            <Pagination.Navigation>
              <Pagination.PreviousButton />
              <Pagination.Pages />
              <Pagination.NextButton />
            </Pagination.Navigation>
          </Pagination.Root>
        </Theme>

        <Theme
          style={{
            '--lui-base__font-family': 'Comic Sans MS, Textile, Cursive',
            '--lui-pagination__item-background--active': 'linear-gradient( 226.4deg,  rgba(255,26,1,1) 28.9%, rgba(254,155,1,1) 33%, rgba(113,63,254,1) 48.6%, rgba(34,218,1,1) 65.3%, rgba(0,141,254,1) 80.6%, rgba(255,241,0,1) 100.1% )',
          } as CSSProperties}
        >
          <Pagination.Root
            {...args}
            onPageChange={(page: number) => updateArgs({page})}
            onItemsPerPageChange={(itemsPerPage: number) => updateArgs({itemsPerPage})}
          >
            <Pagination.Overview>
              <Pagination.ItemsPerPageSelector />
              <Pagination.Summary />
            </Pagination.Overview>
            <Pagination.Navigation>
              <Pagination.PreviousButton><ChevronLeftIcon /></Pagination.PreviousButton>
              <Pagination.Pages />
              <Pagination.NextButton><ChevronRightIcon /></Pagination.NextButton>
            </Pagination.Navigation>
          </Pagination.Root>
        </Theme>
      </div>
    );
  },
  args: {
    count: 100,
    page: 0,
    itemsPerPage: 10,
    onPageChange: action('Page changed'),
    onItemsPerPageChange: action('Items per page changed'),
  },
};

export const LargeDataset: Story = {
  render: (args) => {
    const [_, updateArgs] = useArgs();

    return (
      <Theme>
        <Pagination.Root
          {...args}
          onPageChange={(page: number) => updateArgs({page})}
          onItemsPerPageChange={(itemsPerPage: number) => updateArgs({itemsPerPage})}
        >
          <Pagination.Overview>
            <Pagination.ItemsPerPageSelector />
            <Pagination.Summary />
          </Pagination.Overview>
          <Pagination.Navigation>
            <Pagination.PreviousButton />
            <Pagination.Pages />
            <Pagination.NextButton />
          </Pagination.Navigation>
        </Pagination.Root>
      </Theme>
    );
  },
  args: {
    count: 1000,
    page: 10,
    itemsPerPage: 50,
    onPageChange: action('Page changed'),
    onItemsPerPageChange: action('Items per page changed'),
  },
};

export const MixCustomHTML: Story = {
  render: (args) => {
    const [_, updateArgs] = useArgs();

    return (
      <Theme style={{display: 'flex', gap: '2rem', flexDirection: 'column'}}>
        <Pagination.Root
          {...args}
          onPageChange={(page: number) => updateArgs({page})}
          onItemsPerPageChange={(itemsPerPage: number) => updateArgs({itemsPerPage})}
        >
          <Pagination.Overview>
            <Pagination.ItemsPerPageSelector />
            <Pagination.Summary render={(start, end, total, page, totalPages) => (<><Number value={page} />/<Number value={totalPages} /></>)} />
          </Pagination.Overview>
          <Pagination.Navigation>
            <Pagination.PreviousButton>&lt; Previous</Pagination.PreviousButton>
            <Pagination.Pages />
            <Pagination.NextButton>Next &gt;</Pagination.NextButton>
          </Pagination.Navigation>
        </Pagination.Root>

        <Pagination.Root
          {...args}
          onPageChange={(page: number) => updateArgs({page})}
          onItemsPerPageChange={(itemsPerPage: number) => updateArgs({itemsPerPage})}
        >
          <Pagination.Navigation style={{flex: 1}}>
            <Pagination.PreviousButton><ChevronLeftIcon /> Prev</Pagination.PreviousButton>
            <div style={{flex: 1}}>
              <div style={{display: 'flex', justifyContent: 'center', gap: '0.25rem'}}>
                <Pagination.Pages />
              </div>
            </div>
            <Pagination.NextButton>Next <ChevronRightIcon /></Pagination.NextButton>
          </Pagination.Navigation>
        </Pagination.Root>

      </Theme>
    );
  },
  args: {
    count: 100,
    page: 0,
    itemsPerPage: 10,
    onPageChange: action('Page changed'),
    onItemsPerPageChange: action('Items per page changed'),
  },
};
