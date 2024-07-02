import { Meta, StoryObj } from '@storybook/react';

import BrSearch from './br-search';

const meta: Meta<typeof BrSearch> = {
  title: 'BrSearch',
  component: BrSearch,
  tags: ['autodocs'],
  args: {
    /**
     * For the component properties which has `ReactNode` type set the default value as empty string
     * because the Storybook doesn't allow editing the `ReactNode` type properties in the controls.
     */
  },
};

export default meta;

export type Story = StoryObj<typeof BrSearch>;

export const Basic: Story = {
  render: (args) => {
    return (
      <BrSearch
        {...args}
      >
        BrSearch component
      </BrSearch>
    );
  },
  args: {
    className: 'custom-class-name',
  },
};
