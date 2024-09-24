import { Meta } from '@storybook/react';

import ProductCardMeta, { Basic as BasicStory, type Story } from './product-card.stories';

const meta: Meta = {
  ...ProductCardMeta,
  title: 'COMPONENTS/ProductCard/QA',
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
