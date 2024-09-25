import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { SwatchBarRoot } from './components/swatch-bar-root';
import { Theme } from '../theme';

import RedShirt from '../../../stories/assets/red-shirt.jpg';
import BlueShirt from '../../../stories/assets/blue-shirt.jpg';
import GreenShirt from '../../../stories/assets/green-shirt.jpg';
import ChocolateShirt from '../../../stories/assets/chocolate-shirt.jpg';
import { SwatchBar } from './';


const meta: Meta<typeof SwatchBarRoot> = {
  title: 'COMPONENTS/SwatchBar',
  component: SwatchBarRoot,
  tags: ['autodocs'],
  args: {
    /**
     * For the component properties which has `ReactNode` type set the default value as empty string
     * because the Storybook doesn't allow editing the `ReactNode` type properties in the controls.
     */
  },
};

export default meta;

export type Story = StoryObj<typeof SwatchBarRoot>;

const colorSwatches = [
  'crimson', 'rebeccapurple', 'skyblue', 'gold',
  'chocolate', 'indigo', 'coral', 'magenta',
  'olive', 'turquoise', 'teal', 'royalblue'
];

const textSwatches = ['XS', 'S', 'M', 'L', 'XL'];

const swatches = [{
  id: '4',
  title: 'Red',
  color: 'red',
  image: RedShirt
}, {
  id: '5',
  title: 'Chocolate',
  color: 'chocolate',
  image: ChocolateShirt
}, {
  id: '6',
  title: 'Blue',
  color: 'blue',
  image: BlueShirt
}, {
  id: '7',
  title: 'Green',
  color: 'green',
  image: GreenShirt
}];


export const Basic: Story = {
  render: (args) => {
    const [selected, setSelected] = useState<string | undefined>();

    return (
      <Theme>
        <SwatchBar.Root {...args}>
          <SwatchBar.SwatchGroup
            value={selected}
            onValueChange={(newValue) => setSelected(newValue)}
          >
            {colorSwatches.slice(0, 5).map((swatch) => {
              return <SwatchBar.SwatchColor key={swatch} value={swatch} color={swatch} />
            })}
          </SwatchBar.SwatchGroup>
        </SwatchBar.Root>
      </Theme>
    );
  },
  args: {
    className: 'custom-class-name',
  },
};

export const Images: Story = {
  render: (args) => {
    const [selected, setSelected] = useState<string | undefined>();

    return (
      <Theme>
        <SwatchBar.Root {...args}>
          <SwatchBar.SwatchGroup
            value={selected}
            onValueChange={(newValue) => setSelected(newValue)}
          >
            {swatches.map((swatch) => {
            return <SwatchBar.SwatchImage key={swatch.id} value={swatch.id}>
              <img src={swatch.image} alt={swatch.title} />
            </SwatchBar.SwatchImage>
          })}
          </SwatchBar.SwatchGroup>
        </SwatchBar.Root>
      </Theme>
    );
  },
};

export const Text: Story = {
  render: (args) => {
    const [selected, setSelected] = useState<string | undefined>();

    return (
      <Theme>
        <SwatchBar.Root {...args}>
          <SwatchBar.SwatchGroup
            value={selected}
            onValueChange={(newValue) => setSelected(newValue)}
          >
            {textSwatches.map((swatch) => {
              return <SwatchBar.SwatchText key={swatch} value={swatch}>
                {swatch}
              </SwatchBar.SwatchText>
            })}
          </SwatchBar.SwatchGroup>
        </SwatchBar.Root>
      </Theme>
    );
  },
};

export const HasMore: Story = {
  render: (args) => {
    const [selected, setSelected] = useState<string | undefined>();
    const [limit, setLimit] = useState<number>(5);

    return (
      <Theme>
        <SwatchBar.Root {...args}>
          <SwatchBar.SwatchGroup
            value={selected}
            onValueChange={(newValue) => setSelected(newValue)}
          >
            {colorSwatches.slice(0, limit).map((swatch) => {
              return <SwatchBar.SwatchColor key={swatch} value={swatch} color={swatch} />
            })}
          </SwatchBar.SwatchGroup>
          {limit < colorSwatches.length ? <SwatchBar.Link href="https://bloomreach.com" target='_blank'>+{colorSwatches.length - 5}</SwatchBar.Link> : null}
          {limit < colorSwatches.length ? (
            <SwatchBar.Button onClick={() => {setLimit(colorSwatches.length)}}>
              Show more
            </SwatchBar.Button>
          ) : (
            <SwatchBar.Button onClick={() => {setLimit(5)}}>
              Show less
            </SwatchBar.Button>
          )}
        </SwatchBar.Root>
      </Theme>
    );
  },
};

export const Hover: Story = {
  render: (args) => {
    const [selected, setSelected] = useState<string | undefined>();
    const [hover, setHover] = useState<string | undefined>();

    return (
      <Theme>
        <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
          <div>Hover: {hover}</div>
          <div>Selected: {selected}</div>
          <SwatchBar.Root {...args}>
            <SwatchBar.SwatchGroup
              value={selected}
              onValueChange={(newValue) => setSelected(newValue)}
            >
              {colorSwatches.slice(0, 5).map((swatch) => {
                return <SwatchBar.SwatchColor key={swatch} value={swatch} color={swatch} onMouseEnter={() => setHover(swatch)} onMouseLeave={() => setHover(undefined)} />
              })}
            </SwatchBar.SwatchGroup>
          </SwatchBar.Root>
        </div>
      </Theme>
    );
  },
};

export const Wrap: Story = {
  render: (args) => {
    const [selected, setSelected] = useState<string | undefined>();

    return (
      <Theme>
        <div style={{width: '200px'}}>
          <SwatchBar.Root {...args}>
            <SwatchBar.SwatchGroup
              value={selected}
              onValueChange={(newValue) => setSelected(newValue)}
            >
              {colorSwatches.map((swatch) => {
                return <SwatchBar.SwatchColor key={swatch} value={swatch} color={swatch} />
              })}
            </SwatchBar.SwatchGroup>
          </SwatchBar.Root>
        </div>
      </Theme>
    );
  },
};

export const NowrapOverflow: Story = {
  render: (args) => {
    const [selected, setSelected] = useState<string | undefined>();

    return (
      <Theme>
        <div style={{width: '200px'}}>
          <SwatchBar.Root {...args}>
            <SwatchBar.SwatchGroup
              value={selected}
              onValueChange={(newValue) => setSelected(newValue)}
              style={{flexWrap: 'nowrap', overflowX: 'auto'}}
            >
              {colorSwatches.map((swatch) => {
                return <SwatchBar.SwatchColor key={swatch} value={swatch} color={swatch} />
              })}
            </SwatchBar.SwatchGroup>
          </SwatchBar.Root>
        </div>
      </Theme>
    );
  },
};

export const Disabled: Story = {
  render: (args) => {
    const [selected, setSelected] = useState<string | undefined>();

    return (
      <Theme>
        <div style={{width: '200px'}}>
          <SwatchBar.Root {...args}>
            <SwatchBar.SwatchGroup
              value={selected}
              onValueChange={(newValue) => setSelected(newValue)}
            >
              <SwatchBar.SwatchColor value="crimson" color="crimson" disabled />
              <SwatchBar.SwatchColor value="rebeccapurple" color="rebeccapurple" />
              <SwatchBar.SwatchColor value="gold" color="gold" />
            </SwatchBar.SwatchGroup>
          </SwatchBar.Root>
        </div>
      </Theme>
    );
  },
};
