import { Meta } from '@storybook/react';

import SearchBoxMeta, { Basic as BasicStory, type Story } from './search-box.stories';
import { SearchBoxRoot } from './components/search-box-root';

const meta: Meta<typeof SearchBoxRoot> = {
  ...SearchBoxMeta,
  title: 'SEARCH/SearchBox/QA',
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
