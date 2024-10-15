import { Meta, StoryObj } from '@storybook/react';
import Pagination from './pagination';
import { Theme } from '../theme';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof Pagination> = {
  title: 'COMPONENTS/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  args: {
  },
};

export default meta;

export type Story = StoryObj<typeof Pagination>;

export const Basic: Story = {
  render: (args) => {
    return (
      <Theme>
        <Pagination {...args} />
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

export const WithCustomItemsPerPageOptions: Story = {
  render: (args) => {
    return (
      <Theme>
        <Pagination {...args} />
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

export const NoItems: Story = {
  render: (args) => {
    return (
      <Theme>
        <Pagination {...args} />
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

export const LargeDataset: Story = {
  render: (args) => {
    return (
      <Theme>
        <Pagination {...args} />
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
