import { Meta } from '@storybook/react';

import SuggestionsMeta, { Basic as BasicStory, type Story } from './suggestions.stories';
import { Suggestions } from './suggestions';

const meta: Meta<typeof Suggestions> = {
  ...SuggestionsMeta,
  title: 'SEARCH/Suggestions/QA',
  decorators: [
    (Story) => (
      <div className="qa-story" style={{ padding: '2em' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Basic: Story = {
  ...BasicStory,
};
