import { Meta } from '@storybook/react';

import SwatchBarMeta, { Basic as BasicStory, Images as ImagesStory, Text as TextStory, type Story } from './swatch-bar.stories';

const meta: Meta = {
  ...SwatchBarMeta,
  title: 'COMPONENTS/SwatchBar/QA',
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

export const Images: Story = {
  ...ImagesStory,
};

export const Text: Story = {
  ...TextStory,
};
