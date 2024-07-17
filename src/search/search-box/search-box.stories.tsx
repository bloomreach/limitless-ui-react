import { Meta, StoryObj } from '@storybook/react';

import { SearchBox } from './search-box';
import { SearchContextProvider } from '../context/search.context';

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

const account_id = 6413;
const auth_key = "bcvpynhij980k0y1";
const domain_key = "pacifichome";

export default meta;

export type Story = StoryObj<typeof SearchBox>;

export const Basic: Story = {
  render: (args) => {
    return (
      <SearchContextProvider>
        <SearchBox {...args} />
      </SearchContextProvider>
    );
  },
  args: {
    className: 'custom-class-name',
    debounceDelay: 300,
    configuration: {
      account_id,
      auth_key,
      domain_key,
    },
    searchOptions: {
      _br_uid_2: 'test',
      fl: 'pid,title,description',
      rows: 2,
      start: 0,
      url: 'https://example.com'
    }
  },
};
