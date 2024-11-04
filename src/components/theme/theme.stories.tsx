import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ProductCard } from '../product-card';
import { SwatchBar } from '../swatch-bar';

import Shirt from '../../../stories/assets/shirt.jpg';
import RedShirt from '../../../stories/assets/red-shirt.jpg';
import BlueShirt from '../../../stories/assets/blue-shirt.jpg';
import GreenShirt from '../../../stories/assets/green-shirt.jpg';
import ChocolateShirt from '../../../stories/assets/chocolate-shirt.jpg';
import { Theme } from './';
import { useArgs } from '@storybook/preview-api';
import { CheckboxGroup } from '../checkbox-group';
import { Range } from '../range';
import { formatPrice } from '../../utils';
import { Price } from '../price';
import { Currency } from '../currency';
import { CSSProperties } from 'react';
import { Tag } from '../tag';

const meta: Meta<typeof Theme> = {
  title: 'COMPONENTS/Theme',
  component: Theme,
  tags: ['autodocs'],
  args: {
    /**
     * For the component properties which has `ReactNode` type set the default value as empty string
     * because the Storybook doesn't allow editing the `ReactNode` type properties in the controls.
     */
  },
};

export default meta;

export type Story = StoryObj<typeof Theme>;

const product = {
  id: '123',
  brand: 'Acme',
  title: 'Limitless Shirt',
  collection: 'Apparel',
  rating: 4.2,
  numRatings: 23,
  price: 25,
  salePrice: 20,
  image: Shirt,
  href: 'https://bloomreach.com',
  variants: [{
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
    color: 'skyblue',
    image: BlueShirt
  }, {
    id: '7',
    title: 'Green',
    color: 'green',
    image: GreenShirt
  }]
};

const dirs = ['ltr', 'rtl'];
const currencies = ['USD', 'EUR', 'GBP', 'INR', 'AED', 'CNY', 'JPY'];
const locales = ['en-US', 'nl-NL', 'sk-SK', 'ja-JP', 'hi-IN', 'ar-AE', 'zh-CN'];

export const Basic: Story = {
  render: (args) => {
    const [_, updateArgs] = useArgs();

    return (
      <div>
        <Theme style={{display: 'flex', flexDirection: 'row', gap: '1rem', flexWrap: 'wrap', margin: '1rem 0'}}>
          <div>
            <div style={{fontSize: '0.875rem', margin: '0.5rem 0'}}><b>dir=</b> {args.dir}</div>
            <SwatchBar.Root>
              <SwatchBar.SwatchGroup value={args.dir} onValueChange={(newDir) => updateArgs({dir: newDir})}>
                {dirs.map(d => <SwatchBar.SwatchText key={d} value={d}>{d}</SwatchBar.SwatchText>)}
              </SwatchBar.SwatchGroup>
            </SwatchBar.Root>
          </div>

          <div>
            <div style={{fontSize: '0.875rem', margin: '0.5rem 0'}}><b>currency=</b> {args.currency}</div>
            <SwatchBar.Root>
              <SwatchBar.SwatchGroup value={args.currency} onValueChange={(newCurrency) => updateArgs({currency: newCurrency})}>
                {currencies.map(cur => <SwatchBar.SwatchText key={cur} value={cur}>{cur}</SwatchBar.SwatchText>)}
              </SwatchBar.SwatchGroup>
            </SwatchBar.Root>
          </div>

          <div>
            <div style={{fontSize: '0.875rem', margin: '0.5rem 0'}}><b>locale=</b> {args.locale}</div>
            <SwatchBar.Root>
              <SwatchBar.SwatchGroup value={args.locale} onValueChange={(newLocale) => updateArgs({locale: newLocale})}>
                {locales.map(locale => <SwatchBar.SwatchText key={locale} value={locale}>{locale}</SwatchBar.SwatchText>)}
              </SwatchBar.SwatchGroup>
            </SwatchBar.Root>
          </div>
        </Theme>
        <hr />
        <div>
          <Theme {...args}>
            <div style={{display: 'flex', fontSize: '0.875rem'}}>
              <div style={{width: '33%', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                <div><b>FILTERS</b></div>
                <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems:'start'}}>
                  <Tag onDismiss={() => {}}>Walking</Tag>
                  <Tag onDismiss={() => {}}>Dance</Tag>
                  <Tag onDismiss={() => {}}>🚀 Super fast shipping</Tag>
                  <Tag onDismiss={() => {}}>
                    <div style={{width: '12px', height: '12px', background: 'linear-gradient( 226.4deg,  rgba(255,26,1,1) 28.9%, rgba(254,155,1,1) 33%, rgba(113,63,254,1) 48.6%, rgba(34,218,1,1) 65.3%, rgba(0,141,254,1) 80.6%, rgba(255,241,0,1) 100.1% )', borderRadius: '50%'}}></div> Rainbow
                  </Tag>
                  <Tag onDismiss={() => {}}>
                    <Price value={100} />{' '}&ndash;{' '}<Price value={200} />
                  </Tag>
                  <Tag onDismiss={() => {}}><b>Size:</b>{' '}7.5{' '}&ndash;{' '}11</Tag>
                  <Tag onDismiss={() => {}}><b>Length:</b>{' '}100m{' '}&ndash;{' '}500m</Tag>
                </div>

                <div><b>Activity</b></div>
                <CheckboxGroup.Root value={['walking', 'dance']} onChange={() => {}}>
                  <CheckboxGroup.Item value="running">Running</CheckboxGroup.Item>
                  <CheckboxGroup.Item value="walking">Walking</CheckboxGroup.Item>
                  <CheckboxGroup.Item value="tennis">Tennis</CheckboxGroup.Item>
                  <CheckboxGroup.Item value="hiking">Hiking</CheckboxGroup.Item>
                  <CheckboxGroup.Item value="dance">Dance</CheckboxGroup.Item>
                  <CheckboxGroup.Item value="hiit">HIIT</CheckboxGroup.Item>
                </CheckboxGroup.Root>

                <div><b>Color</b></div>
                <CheckboxGroup.Root value={['rainbow']} onChange={() => {}}>
                  <CheckboxGroup.Item value="red">
                    <div style={{width: '16px', height: '16px', background: 'crimson', borderRadius: '50%'}}></div>Red
                  </CheckboxGroup.Item>
                  <CheckboxGroup.Item value="rainbow">
                    <div style={{width: '16px', height: '16px', background: 'linear-gradient( 226.4deg,  rgba(255,26,1,1) 28.9%, rgba(254,155,1,1) 33%, rgba(113,63,254,1) 48.6%, rgba(34,218,1,1) 65.3%, rgba(0,141,254,1) 80.6%, rgba(255,241,0,1) 100.1% )', borderRadius: '50%'}}></div>Rainbow
                  </CheckboxGroup.Item>
                  <CheckboxGroup.Item value="gold">
                    <div style={{width: '16px', height: '16px', background: 'gold', borderRadius: '50%'}}></div>Gold
                  </CheckboxGroup.Item>
                  <CheckboxGroup.Overflow>
                    <CheckboxGroup.OverflowContent>
                      <CheckboxGroup.Item value="green">
                        <div style={{width: '16px', height: '16px', background: 'green', borderRadius: '50%'}}></div>Green
                      </CheckboxGroup.Item>
                      <CheckboxGroup.Item value="purple">
                        <div style={{width: '16px', height: '16px', background: 'rebeccapurple', borderRadius: '50%'}}></div>Purple
                      </CheckboxGroup.Item>
                    </CheckboxGroup.OverflowContent>
                    <CheckboxGroup.OverflowTrigger />
                  </CheckboxGroup.Overflow>
                </CheckboxGroup.Root>

                <div><b>Price</b></div>
                <CheckboxGroup.Root value={['1', '2']} onChange={() => {}}>
                  <CheckboxGroup.Item value="1">&lt;<Price value={200} /></CheckboxGroup.Item>
                  <CheckboxGroup.Item value="2"><Price value={100} />&ndash;<Price value={200} /></CheckboxGroup.Item>
                  <CheckboxGroup.Item value="3"><Price value={200} />&ndash;<Price value={300} /></CheckboxGroup.Item>
                  <CheckboxGroup.Item value="4"><Price value={300} />&ndash;<Price value={400} /></CheckboxGroup.Item>
                  <CheckboxGroup.Item value="5">&gt;<Price value={400} /></CheckboxGroup.Item>
                </CheckboxGroup.Root>

                <Range.Root min={24.99} max={199.99} step={0.01} value={[45, 175]} onChange={() => {}}>
                  <Range.Slider />
                  <Range.Inputs>
                    <div style={{display: 'flex', alignItems: 'center', gap: '0.25rem'}} dir="ltr"><Currency /><Range.MinInput /></div>
                    <Range.Separator />
                    <div style={{display: 'flex', alignItems: 'center', gap: '0.25rem'}} dir="ltr"><Currency /><Range.MaxInput /></div>
                  </Range.Inputs>
                </Range.Root>

                <div><b>Size</b></div>
                <Range.Root min={1} max={20} step={0.5} value={[7.5, 11]} onChange={() => {}}>
                  <Range.Slider />
                  <Range.Inputs>
                    <Range.MinInput />
                    <Range.Separator />
                    <Range.MaxInput />
                  </Range.Inputs>
                </Range.Root>

                <div><b>Length</b></div>
                <Range.Root min={2000} max={8000} value={[3000, 7000]} onChange={() => {}}>
                  <Range.Slider />
                  <Range.Inputs>
                    <div style={{display: 'flex', alignItems: 'center', gap: '0.25rem'}}><Range.MinInput />m</div>
                    <Range.Separator />
                    <div style={{display: 'flex', alignItems: 'center', gap: '0.25rem'}}><Range.MaxInput />m</div>
                  </Range.Inputs>
                  <Range.UpdateButton>Update</Range.UpdateButton>
                </Range.Root>
              </div>
              <div style={{width: '66%', padding: '1rem'}}>
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                  <div style={{width: '50%', maxWidth: '300px', display: 'flex', padding: '0.5rem'}}>
                    <ProductCard.Root>
                      <ProductCard.Header>
                        <ProductCard.Image src={product.image} alt={product.title} />
                        <ProductCard.FavoriteButton />
                      </ProductCard.Header>
                      <ProductCard.Body>
                        <SwatchBar.Root>
                          <SwatchBar.SwatchGroup>
                          {
                            product.variants.map((swatch) => {
                              return <SwatchBar.SwatchColor key={swatch.id} value={swatch.id} color={swatch.color} />
                            })
                          }
                          </SwatchBar.SwatchGroup>
                        </SwatchBar.Root>
                        <ProductCard.Badge>Special Edition</ProductCard.Badge>
                        <ProductCard.Title>{product.title}</ProductCard.Title>
                        <ProductCard.SubTitle>{product.collection}</ProductCard.SubTitle>
                      </ProductCard.Body>
                      <ProductCard.Footer>
                        <ProductCard.Price price={product.price} salePrice={product.salePrice} />
                        <ProductCard.Button variant="primary">Add to cart</ProductCard.Button>
                      </ProductCard.Footer>
                    </ProductCard.Root>
                  </div>

                  <div style={{
                    width: '50%',
                    maxWidth: '300px',
                    display: 'flex',
                    padding: '0.5rem',
                    '--lui-pc-badge-bg': '#CBC6E9',
                    '--lui-pc-badge-color': 'rebeccapurple'
                    } as CSSProperties}>
                    <ProductCard.Root>
                      <ProductCard.Header>
                        <ProductCard.Image src={product.image} alt={product.title} />
                        <ProductCard.FavoriteButton />
                      </ProductCard.Header>
                      <ProductCard.Body>
                        <ProductCard.Badge>Limited Edition</ProductCard.Badge>
                        <ProductCard.Title>{product.title}</ProductCard.Title>
                        <ProductCard.SubTitle>{product.collection}</ProductCard.SubTitle>
                        <SwatchBar.Root style={{width: '100%'}}>
                          <SwatchBar.SwatchGroup style={{flexWrap: 'nowrap',overflowX: 'auto'}}>
                          {
                            product.variants.map((swatch) => {
                              return <SwatchBar.SwatchImage key={swatch.id} value={swatch.id}>
                                <img src={swatch.image} alt={swatch.title} />
                              </SwatchBar.SwatchImage>
                            })
                          }
                          </SwatchBar.SwatchGroup>
                        </SwatchBar.Root>
                      </ProductCard.Body>
                      <ProductCard.Footer>
                        <ProductCard.Price price={product.price} salePrice={product.salePrice} />
                        <ProductCard.Button variant="primary">Add to cart</ProductCard.Button>
                      </ProductCard.Footer>
                    </ProductCard.Root>
                  </div>

                  <div style={{width: '50%', maxWidth: '300px', display: 'flex', padding: '0.5rem'}}>
                    <ProductCard.Root>
                      <ProductCard.Header>
                        <ProductCard.Image src={product.image} alt={product.title} />
                        <ProductCard.FavoriteButton />
                      </ProductCard.Header>
                      <ProductCard.Body>
                      <ProductCard.Label>{product.collection}</ProductCard.Label>
                      <ProductCard.Title>{product.title}</ProductCard.Title>
                        <SwatchBar.Root style={{width: '100%'}}>
                          <SwatchBar.SwatchGroup style={{flexWrap: 'nowrap',overflowX: 'auto'}}>
                          {
                            product.variants.map((swatch) => {
                              return <SwatchBar.SwatchText key={swatch.id} value={swatch.id}>{swatch.title}</SwatchBar.SwatchText>
                            })
                          }
                          </SwatchBar.SwatchGroup>
                        </SwatchBar.Root>
                       </ProductCard.Body>
                      <ProductCard.Footer>
                        <ProductCard.PriceRange to={product.price} from={product.salePrice} />
                        <ProductCard.Button variant="primary">Add to cart</ProductCard.Button>
                      </ProductCard.Footer>
                    </ProductCard.Root>
                  </div>

                  <div style={{width: '50%', maxWidth: '300px', display: 'flex', padding: '0.5rem'}}>
                    <ProductCard.Root>
                      <ProductCard.Header>
                        <ProductCard.Image src={product.image} alt={product.title} />
                        <ProductCard.FavoriteButton />
                      </ProductCard.Header>
                      <ProductCard.Body>
                        <ProductCard.Title>{product.title}</ProductCard.Title>
                        <ProductCard.SubTitle>{product.collection}</ProductCard.SubTitle>
                       </ProductCard.Body>
                      <ProductCard.Footer>
                        <ProductCard.Price price={product.price} salePrice={product.salePrice} />
                      </ProductCard.Footer>
                    </ProductCard.Root>
                  </div>
                </div>
              </div>
            </div>
          </Theme>
        </div>
      </div>
    );
  },
  args: {
    dir: 'ltr',
    currency: 'USD',
    locale: 'en-US',
  }
};
