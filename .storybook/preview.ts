import type { Preview } from '@storybook/react';
import THEME from './theme';

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      expanded: true,
    },
    layout: 'centered',
    options: {
      storySort: {
        order: ['Introduction', 'Getting started'],
      },
    },
    docs: {
      theme: THEME,
      canvas: {
        sourceState: 'shown'
      },
      toc: {
        headingSelector: 'h2, h3',
        ignoreSelector: '',
        disable: false,
      },
    },
  },
};

export default preview;
