import { Meta } from '@storybook/react';

import CheckboxGroupMeta, { Basic as BasicStory, type Story } from './checkbox-group.stories';
import { CheckboxGroupRoot } from './components/checkbox-group-root';

const meta: Meta<typeof CheckboxGroupRoot> = {
  ...CheckboxGroupMeta,
  title: 'COMPONENTS/CheckboxGroup/QA',
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
