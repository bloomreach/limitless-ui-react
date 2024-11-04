import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';

import { Theme } from '../theme';
import { RangeRoot } from './components/range-root';
import { Range } from './';
import { CSSProperties } from 'react';
import { Currency } from '../currency';

const meta: Meta<typeof RangeRoot> = {
  title: 'COMPONENTS/Range',
  component: RangeRoot,
  tags: ['autodocs'],
  args: {
    min: 0,
    max: 100,
    value: [25, 75],
  },
};

export default meta;

export type Story = StoryObj<typeof RangeRoot>;

export const Basic: Story = {
  render: (args) => {
    const [_, updateArgs] = useArgs();
    const { value } = args;
    return (
      <Theme style={{width: '300px'}}>
        <Range.Root {...args} onChange={(newValue) => updateArgs({value: newValue})}>
          <Range.Slider />
          <Range.Inputs>
            <Range.MinInput />
            <Range.Separator />
            <Range.MaxInput />
          </Range.Inputs>
          <Range.UpdateButton>Update</Range.UpdateButton>
        </Range.Root>
      </Theme>
    );
  },
  args: {
    className: 'custom-class-name',
    min: 0,
    max: 100,
    step: 1,
    value: [25, 75],
    autoUpdate: true,
  },
};

export const CustomStep: Story = {
  render: (args) => {
    const [_, updateArgs] = useArgs();
    return (
      <Theme style={{width: '300px'}}>
        <Range.Root {...args} onChange={(newValue) => updateArgs({value: newValue})}>
          <Range.Slider />
          <Range.Inputs>
            <Range.MinInput />
            <Range.Separator />
            <Range.MaxInput />
          </Range.Inputs>
          <Range.UpdateButton>Update</Range.UpdateButton>
        </Range.Root>
      </Theme>
    );
  },
  args: {
    className: 'custom-class-name',
    min: 0,
    max: 99.99,
    step: 0.01,
    value: [25.25, 75.75],
  },
};

/**
 * Render only the slider
 */
export const SliderOnly: Story = {
  render: (args) => {
    const [_, updateArgs] = useArgs();
    return (
      <Theme style={{width: '300px'}}>
        <Range.Root {...args} onChange={(newValue) => updateArgs({value: newValue})}>
          <Range.Slider />
        </Range.Root>
      </Theme>
    );
  },
  args: {
    className: 'custom-class-name',
    min: 0,
    max: 100,
    step: 1,
    value: [25, 75],
  },
};

export const RTL: Story = {
  render: (args) => {
    const [_, updateArgs] = useArgs();
    return (
      <Theme style={{width: '300px'}} dir="rtl">
        <Range.Root {...args} onChange={(newValue) => updateArgs({value: newValue})}>
          <Range.Slider />
          <Range.Inputs>
            <Range.MinInput />
            <Range.Separator />
            <Range.MaxInput />
          </Range.Inputs>
          <Range.UpdateButton>Update</Range.UpdateButton>
        </Range.Root>
      </Theme>
    );
  },
  args: {
    className: 'custom-class-name',
    min: 0,
    max: 100,
    step: 1,
    value: [25, 75],
  },
};

export const Themes: Story = {
  render: (args) => {
    const [_, updateArgs] = useArgs();
    return (
      <div style={{display: 'flex', gap: '2rem'}}>
      <Theme style={{
        width: '300px',
        '--lui-range-slider-range-bg': 'rebeccapurple',
        '--lui-range-slider-control-bg': 'rebeccapurple',
        '--lui-range-btn-bg': 'rebeccapurple',
        '--lui-range-btn-color': 'white',
        '--lui-range-btn-border-color': 'rebeccapurple',
      } as CSSProperties}>
        <Range.Root {...args} onChange={(newValue) => updateArgs({value: newValue})}>
          <Range.Slider />
          <Range.Inputs>
            <Range.MinInput />
            <Range.Separator />
            <Range.MaxInput />
          </Range.Inputs>
          <Range.UpdateButton>Update</Range.UpdateButton>
        </Range.Root>
      </Theme>
      <Theme style={{
        width: '300px',
        '--lui-base-font-family': 'Comic Sans MS, Textile, Cursive',
        '--lui-range-slider-range-bg': 'linear-gradient( 226.4deg,  rgba(255,26,1,1) 28.9%, rgba(254,155,1,1) 33%, rgba(255,241,0,1) 48.6%, rgba(34,218,1,1) 65.3%, rgba(0,141,254,1) 80.6%, rgba(113,63,254,1) 100.1% )',
        '--lui-range-slider-control-bg': 'linear-gradient( 226.4deg,  rgba(255,26,1,1) 28.9%, rgba(254,155,1,1) 33%, rgba(255,241,0,1) 48.6%, rgba(34,218,1,1) 65.3%, rgba(0,141,254,1) 80.6%, rgba(113,63,254,1) 100.1% )',
        '--lui-range-btn-bg': 'linear-gradient( 226.4deg,  rgba(255,26,1,1) 28.9%, rgba(254,155,1,1) 33%, rgba(255,241,0,1) 48.6%, rgba(34,218,1,1) 65.3%, rgba(0,141,254,1) 80.6%, rgba(113,63,254,1) 100.1% )',
        '--lui-range-btn-border-color': 'white',
      } as CSSProperties}>
        <Range.Root {...args} onChange={(newValue) => updateArgs({value: newValue})}>
          <Range.Slider />
          <Range.Inputs>
            <Range.MinInput />
            <Range.Separator />
            <Range.MaxInput />
          </Range.Inputs>
          <Range.UpdateButton>Update</Range.UpdateButton>
        </Range.Root>
      </Theme>
      </div>
    );
  },
  args: {
    className: 'custom-class-name',
    min: 0,
    max: 100,
    step: 1,
    value: [25, 75],
  },
};

/**
 * Mix with your own custom HTML, try different layouts to match your design needs
 */
export const MixCustomHTML: Story = {
  render: (args) => {
    const [_, updateArgs] = useArgs();
    return (
      <Theme style={{width: '500px', display: 'flex', flexDirection: 'column', gap: '4rem'}}>
        <Range.Root {...args} onChange={(newValue) => updateArgs({value: newValue})}>
          <div style={{display: 'flex', gap: '1rem', alignItems: 'center'}}>
            <div style={{width: '100px'}}><Range.MinInput /></div>
            <Range.Slider />
            <div style={{width: '100px'}}><Range.MaxInput /></div>
          </div>
        </Range.Root>

        <Range.Root min={24.99} max={199.99} step={0.01} value={[45, 175]} onChange={() => {}}>
          <Range.Slider />
          <Range.Inputs>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.25rem'}} dir="ltr"><Currency /><Range.MinInput /></div>
            <Range.Separator />
            <div style={{display: 'flex', alignItems: 'center', gap: '0.25rem'}} dir="ltr"><Currency /><Range.MaxInput /></div>
          </Range.Inputs>
        </Range.Root>

        <Range.Root min={0} max={10} step={0.01} value={[3.8, 5.7]} onChange={() => {}}>
          <Range.Slider />
          <Range.Inputs>
            <div style={{display: 'flex', alignItems: 'center', gap: '0.25rem'}}><Range.MinInput />inches</div>
            <Range.Separator />
            <div style={{display: 'flex', alignItems: 'center', gap: '0.25rem'}}><Range.MaxInput />inches</div>
          </Range.Inputs>
        </Range.Root>
      </Theme>
    );
  },
  args: {
    className: 'custom-class-name',
    min: 0,
    max: 100,
    step: 1,
    value: [25, 75],
  },
};
