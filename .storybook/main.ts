import type { StorybookConfig } from '@storybook/react-vite';

const E2E = process.env.E2E === 'true';

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.mdx',
    E2E ? '../src/**/*.test.stories.tsx' : '../src/**/!(*test).stories.tsx',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-actions',
    '@storybook/addon-a11y',
    '@storybook/addon-storysource',
    '@storybook/addon-viewport',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: ['../stories/assets'],
};
export default config;
