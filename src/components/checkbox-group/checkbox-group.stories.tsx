import { Meta, StoryObj } from '@storybook/react';

import { Theme } from '../theme';
import { CheckboxGroupRoot } from './components/checkbox-group-root';
import { CheckboxGroup} from './';
import { CSSProperties, useState } from 'react';

const meta: Meta<typeof CheckboxGroupRoot> = {
  title: 'COMPONENTS/CheckboxGroup',
  component: CheckboxGroupRoot,
  tags: ['autodocs'],
  args: {},
};

export default meta;

export type Story = StoryObj<typeof CheckboxGroupRoot>;

export const Basic: Story = {
  render: (args) => {
    const [value, setValue] = useState<string[]>(['red']);

    return (
      <Theme style={{width: '300px'}}>
        <CheckboxGroup.Root {...args} value={value} onChange={setValue}>
          <CheckboxGroup.Item value="red">Red</CheckboxGroup.Item>
          <CheckboxGroup.Item value="blue">Blue</CheckboxGroup.Item>
          <CheckboxGroup.Item value="green">Green</CheckboxGroup.Item>
        </CheckboxGroup.Root>
        <div style={{fontSize: '0.875rem', margin: '1rem 0'}}>
          Selected: {value.join(', ') || <span style={{opacity: '0.5'}}>NA</span>}
        </div>
      </Theme>
    );
  },
  args: {
    className: 'custom-class-name',
  },
};

export const Overflow: Story = {
  render: (args) => {
    const [value, setValue] = useState<string[]>(['red']);

    return (
      <Theme style={{width: '300px'}}>
        <CheckboxGroup.Root {...args} value={value} onChange={setValue}>
          <CheckboxGroup.Item value="red">Red</CheckboxGroup.Item>
          <CheckboxGroup.Item value="blue">Blue</CheckboxGroup.Item>
          <CheckboxGroup.Item value="green">Green</CheckboxGroup.Item>
          <CheckboxGroup.Overflow>
            <CheckboxGroup.OverflowContent>
              <CheckboxGroup.Item value="white">White</CheckboxGroup.Item>
              <CheckboxGroup.Item value="black">Black</CheckboxGroup.Item>
            </CheckboxGroup.OverflowContent>
            <CheckboxGroup.OverflowTrigger />
          </CheckboxGroup.Overflow>
        </CheckboxGroup.Root>
        <div style={{fontSize: '0.875rem', margin: '1rem 0'}}>
          Selected: {value.join(', ') || <span style={{opacity: '0.5'}}>NA</span>}
        </div>
      </Theme>
    );
  },
  args: {
    className: 'custom-class-name',
  },
};

export const RTL: Story = {
  render: (args) => {
    const [value, setValue] = useState<string[]>(['red']);
    return (
      <Theme dir='rtl' style={{width: '300px'}}>
        <CheckboxGroup.Root {...args} value={value} onChange={setValue}>
          <CheckboxGroup.Item value="red">Red</CheckboxGroup.Item>
          <CheckboxGroup.Item value="blue">Blue</CheckboxGroup.Item>
          <CheckboxGroup.Item value="green">Green</CheckboxGroup.Item>
          <CheckboxGroup.Overflow>
            <CheckboxGroup.OverflowContent>
              <CheckboxGroup.Item value="white">White</CheckboxGroup.Item>
              <CheckboxGroup.Item value="black">Black</CheckboxGroup.Item>
            </CheckboxGroup.OverflowContent>
            <CheckboxGroup.OverflowTrigger />
          </CheckboxGroup.Overflow>
        </CheckboxGroup.Root>
        <div style={{fontSize: '0.875rem', margin: '1rem 0'}}>
          Selected: {value.join(', ') || <span style={{opacity: '0.5'}}>NA</span>}
        </div>
      </Theme>
    );
  },
  args: {
    className: 'custom-class-name',
  },
};

export const Themes: Story = {
  render: (args) => {
    const [value, setValue] = useState<string[]>(['red']);
    return (
      <div>
        <div style={{display: 'flex', gap: '2rem'}}>
          <Theme style={{
            width: '200px',
            '--lui-checkbox__background--active': 'rebeccapurple',
            '--lui-cg__overflow-trigger-color': 'rebeccapurple',
          } as CSSProperties}>
            <CheckboxGroup.Root {...args} value={value} onChange={setValue}>
              <CheckboxGroup.Item value="red">Red</CheckboxGroup.Item>
              <CheckboxGroup.Item value="blue">Blue</CheckboxGroup.Item>
              <CheckboxGroup.Item value="green">Green</CheckboxGroup.Item>
              <CheckboxGroup.Overflow>
                <CheckboxGroup.OverflowContent>
                  <CheckboxGroup.Item value="white">White</CheckboxGroup.Item>
                  <CheckboxGroup.Item value="black">Black</CheckboxGroup.Item>
                </CheckboxGroup.OverflowContent>
                <CheckboxGroup.OverflowTrigger />
              </CheckboxGroup.Overflow>
            </CheckboxGroup.Root>
          </Theme>
          <Theme style={{
            width: '200px',
            '--lui-checkbox__background--active': 'linear-gradient( 226.4deg,  rgba(255,26,1,1) 28.9%, rgba(254,155,1,1) 33%, rgba(113,63,254,1) 48.6%, rgba(34,218,1,1) 65.3%, rgba(0,141,254,1) 80.6%, rgba(255,241,0,1) 100.1% )',
            '--lui-cg__overflow-trigger-color': 'rebeccapurple',
          } as CSSProperties}>
            <CheckboxGroup.Root {...args} value={value} onChange={setValue}>
              <CheckboxGroup.Item value="red">Red</CheckboxGroup.Item>
              <CheckboxGroup.Item value="blue">Blue</CheckboxGroup.Item>
              <CheckboxGroup.Item value="green">Green</CheckboxGroup.Item>
              <CheckboxGroup.Overflow>
                <CheckboxGroup.OverflowContent>
                  <CheckboxGroup.Item value="white">White</CheckboxGroup.Item>
                  <CheckboxGroup.Item value="black">Black</CheckboxGroup.Item>
                </CheckboxGroup.OverflowContent>
                <CheckboxGroup.OverflowTrigger style={{background: 'linear-gradient( 226.4deg,  rgba(255,26,1,1) 28.9%, rgba(254,155,1,1) 33%, rgba(113,63,254,1) 48.6%, rgba(34,218,1,1) 65.3%, rgba(0,141,254,1) 80.6%, rgba(255,241,0,1) 100.1% )', color: 'transparent', backgroundClip: 'text'}} />
            </CheckboxGroup.Overflow>
            </CheckboxGroup.Root>
          </Theme>
        </div>
        <div style={{fontSize: '0.875rem', margin: '1rem 0'}}>
          Selected: {value.join(', ') || <span style={{opacity: '0.5'}}>NA</span>}
        </div>
      </div>
    );
  },
  args: {
    className: 'custom-class-name',
  },
};

export const MixCustomHTML: Story = {
  render: (args) => {
    const [value, setValue] = useState<string[]>(['red']);
    return (
      <Theme style={{width: '300px'}}>
        <CheckboxGroup.Root {...args} value={value} onChange={setValue}>
          <CheckboxGroup.Item value="red">
            <div style={{display: 'flex', alignItems: 'center', width: '100%'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '0.25rem', flexGrow: 1}}>
                <div style={{width: '16px', height: '16px', background: 'crimson', borderRadius: '50%'}}></div>Red
              </div>
              <div style={{opacity: 0.5}}>19</div>
            </div>
          </CheckboxGroup.Item>
          <CheckboxGroup.Item value="rainbow">
            <div style={{display: 'flex', alignItems: 'center', width: '100%'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '0.25rem', flexGrow: 1}}>
                <div style={{width: '16px', height: '16px', background: 'linear-gradient( 226.4deg,  rgba(255,26,1,1) 28.9%, rgba(254,155,1,1) 33%, rgba(113,63,254,1) 48.6%, rgba(34,218,1,1) 65.3%, rgba(0,141,254,1) 80.6%, rgba(255,241,0,1) 100.1% )', borderRadius: '50%'}}></div>Rainbow
              </div>
              <div style={{opacity: 0.5}}>63</div>
            </div>
          </CheckboxGroup.Item>
          <CheckboxGroup.Item value="gold">
            <div style={{display: 'flex', alignItems: 'center', width: '100%'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '0.25rem', flexGrow: 1}}>
                <div style={{width: '16px', height: '16px', background: 'gold', borderRadius: '50%'}}></div>Gold
              </div>
              <div style={{opacity: 0.5}}>31</div>
            </div>
          </CheckboxGroup.Item>
          <CheckboxGroup.Overflow>
            <CheckboxGroup.OverflowContent>
              <CheckboxGroup.Item value="green">
                <div style={{display: 'flex', alignItems: 'center', width: '100%'}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: '0.25rem', flexGrow: 1}}>
                    <div style={{width: '16px', height: '16px', background: 'green', borderRadius: '50%'}}></div>Green
                  </div>
                  <div style={{opacity: 0.5}}>22</div>
                </div>
              </CheckboxGroup.Item>
              <CheckboxGroup.Item value="purple">
                <div style={{display: 'flex', alignItems: 'center', width: '100%'}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: '0.25rem', flexGrow: 1}}>
                    <div style={{width: '16px', height: '16px', background: 'rebeccapurple', borderRadius: '50%'}}></div>Purple
                  </div>
                  <div style={{opacity: 0.5}}>80</div>
                </div>
              </CheckboxGroup.Item>
            </CheckboxGroup.OverflowContent>
            <CheckboxGroup.OverflowTrigger label="View more +" expandedLabel="View less -" />
          </CheckboxGroup.Overflow>
        </CheckboxGroup.Root>
        <div style={{fontSize: '0.875rem', margin: '1rem 0'}}>
          Selected: {value.join(', ') || <span style={{opacity: '0.5'}}>NA</span>}
        </div>
      </Theme>
    );
  },
  args: {
    className: 'custom-class-name',
  },
};
