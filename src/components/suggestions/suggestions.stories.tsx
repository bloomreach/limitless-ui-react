import { Meta, StoryObj } from '@storybook/react';

import {
  AutosuggestOptions,
  Configuration,
  ProductSearchOptions,
} from '@bloomreach/discovery-web-sdk';
import { LimitlessUIProvider } from '../../contexts/limitless-ui.provider';
import { SearchBox } from '../search-box/search-box';
import { SearchBoxProps } from '../search-box/search-box.types';
import { Suggestions } from './suggestions';
import { AutoSuggestContextProvider } from '../../contexts/autosuggest.context';

const meta: Meta<typeof Suggestions> = {
  title: 'SEARCH/Suggestions',
  component: Suggestions,
  tags: ['autodocs'],
  args: {
    /**
     * For the component properties which has `ReactNode` type set the default value as empty string
     * because the Storybook doesn't allow editing the `ReactNode` type properties in the controls.
     */
  },
};

export default meta;

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

export type Story = StoryObj<typeof Suggestions>;

export const Basic: Story = {
  render: (args) => {
    return (
      <LimitlessUIProvider>
        <SearchBox {...searchBoxProps} {...args} />
      </LimitlessUIProvider>
    );
  },
  args: {
    configuration,
    suggestOptions,
  },
};

export const StandAlone: Story = {
  render: (args) => {
    return (
      <AutoSuggestContextProvider>
        <Suggestions {...args} />
      </AutoSuggestContextProvider>
    );
  },
  args: {
    inputValue: 'chair',
    configuration,
    suggestOptions,
    debounceDelay: 300,
  },
};
