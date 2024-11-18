import { Meta, StoryObj } from '@storybook/react';

import { AutosuggestOptions, Configuration, ProductSearchOptions } from '@bloomreach/discovery-web-sdk';
import { useContext } from 'react';
import { LimitlessUIProvider } from '../../contexts/limitless-ui.provider';
import { SearchContext } from '../../contexts/search.context';
import { SearchBox } from './search-box';
import { Theme } from '../theme';
import { Suggestions } from '../suggestions';

const meta: Meta<typeof SearchBox> = {
  title: 'SEARCH/SearchBox',
  component: SearchBox,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  args: {
    /**
     * For the component properties which has `ReactNode` type set the default value as empty string
     * because the Storybook doesn't allow editing the `ReactNode` type properties in the controls.
     */
  },
};

export default meta;

export type Story = StoryObj<typeof SearchBox>;
export type SuggestionsStory = StoryObj<typeof Suggestions>;

const configuration: Configuration = {
  account_id: 7634,
  auth_key: 'zjlc0tsp2xu7l7ro',
  domain_key: 'showcase_pacifichome',
};

const suggestOptions: Omit<AutosuggestOptions, 'q'> = {
  _br_uid_2: 'test',
  catalog_views: 'showcase_pacifichome',
  url: 'https://example.com',
};

const searchOptions: Omit<ProductSearchOptions, 'q'> = {
  _br_uid_2: 'test',
  fl: 'pid,title,description',
  rows: 2,
  start: 0,
  url: 'https://example.com',
  'facet.version': '3.0',
};

const searchBoxProps: SearchBoxProps = {
  configuration,
  searchOptions,
  searchType: 'product',
  labels: {
    label: 'My basic label',
    placeholder: 'Enter search here',
    submit: 'Submit',
    reset: 'Reset',
  },
};

//
// Will be replaced with a 'results' component later
const Results = () => {
  const context = useContext(SearchContext);
  return context?.searchResponse?.response?.docs?.map((result) => {
    return (
      <div key={result.pid}>
        <h2>{result.title}</h2>
        <p>{result.description}</p>
      </div>
    );
  });
};

export const Basic: Story = {
  render: (args) => {
    return (
      <Theme>
        <LimitlessUIProvider>
          <SearchBox {...args} />
          <Results />
        </LimitlessUIProvider>
      </Theme>
    );
  },
  args: {
    configuration,
    searchOptions,
    searchType: 'product',
    labels: {
      label: 'My basic label',
      placeholder: 'Enter search here',
      submit: 'Submit',
      reset: 'Reset',
    },
  },
};

export const Autosuggest: Story = {
  render: (args) => {
    return (
      <Theme>
        <LimitlessUIProvider>
          <SearchBox {...args}>
            <Suggestions {...args} />
          </SearchBox>
        </LimitlessUIProvider>
      </Theme>
    );
  },
  args: {
    configuration,
    suggestOptions,
  },
};

export const AutoQuery: Story = {
  render: (args) => {
    return (
      <Theme>
        <LimitlessUIProvider>
          <SearchBox {...args} />
          <Results />
        </LimitlessUIProvider>
      </Theme>
    );
  },
  args: {
    autoQuery: true,
    debounceDelay: 300,
    configuration,
    searchOptions,
    searchType: 'product',
    name: 'custom-input-name',
    labels: {
      placeholder: 'Enter search here',
      submit: 'Submit',
      reset: 'Reset',
    },
  },
};
