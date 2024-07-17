import { Meta } from '@storybook/react';

import SearchBoxMeta, { Basic as BasicStory, type Story } from './search-box.stories';
import { SearchBox } from './search-box';

const meta: Meta<typeof SearchBox> = {
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
