import { Meta, StoryObj } from '@storybook/react';

import { useContext } from 'react';
import { SearchContext, SearchContextProvider } from '../context/search.context';
import { SearchBox } from './search-box';

// Will be replaced with a 'results' component later
const Results = () => {
  const { searchResponse } = useContext(SearchContext);
  return searchResponse?.response?.docs?.map((result) => {
    return (
      <div key={result.pid}>
        <h2>{result.title}</h2>
        <p>{result.description}</p>
      </div>
    );
  });
};

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
      <SearchContextProvider>
        <SearchBox {...args} />
        <Results />
      </SearchContextProvider>
    );
  },
  args: {
    className: 'custom-class-name',
    debounceDelay: 300,
    configuration: {
      account_id: 6413,
      domain_key: 'pacifichome',
    },
    searchOptions: {
      _br_uid_2: 'test',
      fl: 'pid,title,description',
      rows: 2,
      start: 0,
      url: 'https://example.com',
    },
    searchType: 'product',
    submitText: 'Do search',
    inputLabel: 'My Search Box'
  },
};
