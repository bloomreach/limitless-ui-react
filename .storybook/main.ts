import type { StorybookConfig } from '@storybook/react-vite';

const E2E = process.env.E2E === 'true';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    E2E ? '../src/**/*.test.stories.tsx' : '../src/**/!(*test).stories.tsx',
  ],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  staticDirs: ['../stories/assets'],
};
export default config;
