import { Meta } from '@storybook/react';

import TagMeta, { Basic as BasicStory, type Story } from './tag.stories';
import { Tag } from './tag';

const meta: Meta<typeof Tag> = {
  ...TagMeta,
  title: 'COMPONENTS/Tag/QA',
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
