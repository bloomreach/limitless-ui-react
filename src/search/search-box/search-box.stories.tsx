import { Meta, StoryObj } from '@storybook/react';

import { SearchBox } from './search-box';

const meta: Meta<typeof SearchBox> = {
  title: 'SEARCH/SearchBox',
  component: SearchBox,
  tags: ['autodocs'],
  args: {
    /**
     * For the component properties which has `ReactNode` type set the default value as empty string
     * because the Storybook doesn't allow editing the `ReactNode` type properties in the controls.
     */
  },
};

export default meta;

export type Story = StoryObj<typeof SearchBox>;

export const Basic: Story = {
  render: (args) => {
    return (
      <SearchBox
        {...args}
      >
        SearchBox component
      </SearchBox>
    );
  },
  args: {
    className: 'custom-class-name',
  },
};
