import { Meta, StoryObj } from '@storybook/react';

import { Tag } from './tag';
import { Price } from '../price';
import { Theme } from '../theme';
import { CSSProperties } from 'react';
import { StarFilledIcon } from '@radix-ui/react-icons';

const meta: Meta<typeof Tag> = {
  title: 'COMPONENTS/Tag',
  component: Tag,
  tags: ['autodocs'],
  args: {
    /**
     * For the component properties which has `ReactNode` type set the default value as empty string
     * because the Storybook doesn't allow editing the `ReactNode` type properties in the controls.
     */
  },
};

export default meta;

export type Story = StoryObj<typeof Tag>;

export const Basic: Story = {
  render: (args) => {
    return (
      <Theme>
        <Tag
          {...args}
          onDismiss={() => {}}
        >
          Running
        </Tag>
      </Theme>
    );
  },
  args: {
    className: 'custom-class-name',
  },
};

export const WithIcon: Story = {
  render: (args) => {
    return (
      <Theme>
        <Tag
          {...args}
          onDismiss={() => {}}
        >
          <StarFilledIcon />
          3.5{' '}&ndash;{' '}4.5
        </Tag>
      </Theme>
    );
  },
  args: {
    className: 'custom-class-name',
  },
};

export const RTL: Story = {
  render: (args) => {
    return (
      <Theme dir='rtl'>
        <Tag
          {...args}
          onDismiss={() => {}}
        >
          <Price value={0} />{' '}&ndash;{' '}<Price value={25} />
        </Tag>
      </Theme>
    );
  },
  args: {
    className: 'custom-class-name',
  },
};

export const Themes: Story = {
  render: (args) => {
    return (
      <div style={{display: 'flex', gap: '2rem'}}>
        <Theme style={{
          '--lui-tag-bg': 'rebeccapurple',
          '--lui-tag-color': 'white',
        } as CSSProperties}>
          <Tag
            {...args}
            onDismiss={() => {}}
          >
            <Price value={0} />{' '}&ndash;{' '}<Price value={25} />
          </Tag>
        </Theme>
        <Theme style={{
          '--lui-base-font-family': 'Comic Sans MS, Textile, Cursive',
          '--lui-tag-bg': 'linear-gradient( 226.4deg,  rgba(255,26,1,1) 28.9%, rgba(254,155,1,1) 33%, rgba(255,241,0,1) 48.6%, rgba(34,218,1,1) 65.3%, rgba(0,141,254,1) 80.6%, rgba(113,63,254,1) 100.1% )',
          '--lui-tag-color': 'black',
        } as CSSProperties}>
          <Tag
            {...args}
            onDismiss={() => {}}
          >
            <Price value={0} />{' '}&ndash;{' '}<Price value={25} />
          </Tag>
        </Theme>
      </div>
    );
  },
  args: {
    className: 'custom-class-name',
  },
};

export const MixCustomHTML: Story = {
  render: (args) => {
    return (
      <Theme style={{display: 'flex', flexDirection: 'column', gap: '1rem', alignItems:'start'}}>
        <Tag
          {...args}
          onDismiss={() => {}}
        >
          🚀 Super fast shipping
        </Tag>

        <Tag
          {...args}
          onDismiss={() => {}}
        >
          <div style={{width: '12px', height: '12px', background: 'linear-gradient( 226.4deg,  rgba(255,26,1,1) 28.9%, rgba(254,155,1,1) 33%, rgba(113,63,254,1) 48.6%, rgba(34,218,1,1) 65.3%, rgba(0,141,254,1) 80.6%, rgba(255,241,0,1) 100.1% )', borderRadius: '50%'}}></div> Rainbow
        </Tag>
      </Theme>
    );
  },
  args: {
    className: 'custom-class-name',
  },
};
