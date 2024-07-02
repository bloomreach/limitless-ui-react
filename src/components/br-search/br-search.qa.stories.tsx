import { Meta } from '@storybook/react';

import BrSearchMeta, { Basic as BasicStory, type Story } from './br-search.stories';

const meta: Meta = {
  ...BrSearchMeta,
  title: 'BrSearch/QA',
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
