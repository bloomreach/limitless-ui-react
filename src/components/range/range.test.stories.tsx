import { Meta } from '@storybook/react';

import RangeMeta, { Basic as BasicStory, type Story } from './range.stories';
import { RangeRoot } from './components/range-root';

const meta: Meta<typeof RangeRoot> = {
  ...RangeMeta,
  title: 'COMPONENTS/Range/QA',
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
