import { Meta } from '@storybook/react';

import PaginationMeta, { Basic as BasicStory, type Story } from './pagination.stories';
import { PaginationProps } from './pagination.types';

const meta: Meta<PaginationProps & React.RefAttributes<HTMLDivElement>> = {
  ...PaginationMeta,
  title: 'COMPONENTS/Pagination/QA',
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
