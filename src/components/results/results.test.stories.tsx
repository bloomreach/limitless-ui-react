import { Meta } from '@storybook/react';

import ResultsMeta, { Basic as BasicStory, type Story } from './results.stories';
import { Results } from './results';

const meta: Meta<typeof Results> = {
  ...ResultsMeta,
  title: 'COMPONENTS/Results/QA',
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
