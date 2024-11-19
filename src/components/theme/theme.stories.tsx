import { Meta, StoryObj } from '@storybook/react';
import { useState, useMemo } from 'react';
import { useArgs } from '@storybook/preview-api';
import { StarFilledIcon } from '@radix-ui/react-icons';

import { ProductCard } from '../product-card';
import { SwatchBar } from '../swatch-bar';
import { Theme } from './';
import { CheckboxGroup } from '../checkbox-group';
import { Range } from '../range';
import { Price } from '../price';
import { Currency } from '../currency';
import { CSSProperties } from 'react';
import { Tag } from '../tag';
import { Pagination } from '../pagination';
import { Number } from '../number';

import Shirt from '../../../stories/assets/shirt.jpg';
import RedShirt from '../../../stories/assets/red-shirt.jpg';
import BlueShirt from '../../../stories/assets/blue-shirt.jpg';
import GreenShirt from '../../../stories/assets/green-shirt.jpg';
import ChocolateShirt from '../../../stories/assets/chocolate-shirt.jpg';
import bloomreachIcon from '../../../stories/assets/bloomreach-icon.svg';
import claritySplash from '../../../stories/assets/br_ai-shopping-clarity.webp';

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

const themes = {
  'default': {},
  'purple 🦄': {
    '--lui-checkbox__background--active': 'rebeccapurple',
    '--lui-cg__overflow-trigger-color': 'rebeccapurple',
    '--lui-pc__btn-background': 'rebeccapurple',
    '--lui-pc__btn-border-color': 'rebeccapurple',
    '--lui-pc__btn-color': 'white',
    '--lui-range__slider-range-background': 'rebeccapurple',
    '--lui-range__slider-control-background': 'rebeccapurple',
    '--lui-range__btn-background': 'rebeccapurple',
    '--lui-range__btn-color': 'white',
    '--lui-range__btn-border-color': 'rebeccapurple',
    '--lui-tag__bg': 'rebeccapurple',
    '--lui-tag__color': 'white',
    '--lui-pagination__item-background--active': 'rebeccapurple',
  },
  'rainbow 🌈': {
    '--lui-base__font-family': 'Comic Sans MS, Textile, Cursive',
    '--lui-checkbox__background--active': 'linear-gradient( 226.4deg,  rgba(255,26,1,1) 28.9%, rgba(254,155,1,1) 33%, rgba(255,241,0,1) 48.6%, rgba(34,218,1,1) 65.3%, rgba(0,141,254,1) 80.6%, rgba(113,63,254,1) 100.1% )',
    '--lui-pc__btn-background': 'linear-gradient( 226.4deg,  rgba(255,26,1,1) 28.9%, rgba(254,155,1,1) 33%, rgba(255,241,0,1) 48.6%, rgba(34,218,1,1) 65.3%, rgba(0,141,254,1) 80.6%, rgba(113,63,254,1) 100.1% )',
    '--lui-range__slider-range-background': 'linear-gradient( 226.4deg,  rgba(255,26,1,1) 28.9%, rgba(254,155,1,1) 33%, rgba(255,241,0,1) 48.6%, rgba(34,218,1,1) 65.3%, rgba(0,141,254,1) 80.6%, rgba(113,63,254,1) 100.1% )',
    '--lui-range__slider-control-background': 'linear-gradient( 226.4deg,  rgba(255,26,1,1) 28.9%, rgba(254,155,1,1) 33%, rgba(255,241,0,1) 48.6%, rgba(34,218,1,1) 65.3%, rgba(0,141,254,1) 80.6%, rgba(113,63,254,1) 100.1% )',
    '--lui-range__btn-background': 'linear-gradient( 226.4deg,  rgba(255,26,1,1) 28.9%, rgba(254,155,1,1) 33%, rgba(255,241,0,1) 48.6%, rgba(34,218,1,1) 65.3%, rgba(0,141,254,1) 80.6%, rgba(113,63,254,1) 100.1% )',
    '--lui-range__btn-border-color': 'white',
    '--lui-tag__bg': 'linear-gradient( 226.4deg,  rgba(255,26,1,1) 28.9%, rgba(254,155,1,1) 33%, rgba(255,241,0,1) 48.6%, rgba(34,218,1,1) 65.3%, rgba(0,141,254,1) 80.6%, rgba(113,63,254,1) 100.1% )',
    '--lui-pagination__item-background--active': 'linear-gradient( 226.4deg,  rgba(255,26,1,1) 28.9%, rgba(254,155,1,1) 33%, rgba(255,241,0,1) 48.6%, rgba(34,218,1,1) 65.3%, rgba(0,141,254,1) 80.6%, rgba(113,63,254,1) 100.1% )',
    '--lui-pagination__item-color--active': 'black',
  }
};

const dirs = ['ltr', 'rtl'];
const currencies = ['USD', 'EUR', 'GBP', 'INR', 'AED', 'CNY', 'JPY'];
const locales = ['en-US', 'nl-NL', 'sk-SK', 'ja-JP', 'hi-IN', 'ar-AE', 'zh-CN'];

export const Basic: Story = {
  render: (args) => {
    const [_, updateArgs] = useArgs();
    const [activity, setActivity] = useState<string[]>(['walking', 'dance']);
    const [colors, setColors] = useState<string[]>(['rainbow']);
    const [price, setPrice] = useState<string[]>(['1', '2']);
    const [sort, setSort] = useState<string | undefined>('relevance');
    const [itemsPerPage, setItemsPerPage] = useState<number>(20);
    const [page, setPage] = useState<number>(0);
    const [showcaseTheme, setShowcaseTheme] = useState<string | undefined>('default');
    const [sku, setSku] = useState<string | undefined>();
    const [preview, setPreview] = useState<string | undefined>();
    const themeStyles = useMemo(() => {
      return showcaseTheme ? themes[showcaseTheme as keyof typeof themes] : {};
    }, [showcaseTheme]);

    function setSwatch(id: string) {
      setSku(id);
      setPreview(product.variants.find(v => v.id === id)?.image);
    }

    return (
      <div>
        <Theme style={{margin: '0 0 1rem 0', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
          <div style={{fontSize: '1.1rem', padding: '1rem'}}>
            <div style={{margin: '0 1rem 0.5rem'}}>
              <span style={{background: 'gold', padding: '0.25rem', borderRadius: '6px', fontWeight: 600}}>Accessibility</span> {' '}
              and <span style={{background: 'gold', padding: '0.25rem', borderRadius: '6px', fontWeight: 600}}>internationalization (i18n)</span> supported out of the box
            </div>
            <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap', width: '100%', padding: '0 1rem 1rem', fontSize: '0.875rem'}}>
              <div>
                <div style={{ margin: '0.5rem 0'}}><b>dir</b></div>
                <SwatchBar.Root>
                  <SwatchBar.SwatchGroup value={args.dir} onValueChange={(newDir) => updateArgs({dir: newDir})}>
                    {dirs.map(d => <SwatchBar.SwatchText key={d} value={d}>{d}</SwatchBar.SwatchText>)}
                  </SwatchBar.SwatchGroup>
                </SwatchBar.Root>
              </div>

              <div>
                <div style={{margin: '0.5rem 0'}}><b>currency</b> {args.currency}</div>
                <SwatchBar.Root>
                  <SwatchBar.SwatchGroup value={args.currency} onValueChange={(newCurrency) => updateArgs({currency: newCurrency})}>
                    {currencies.map(cur => <SwatchBar.SwatchText key={cur} value={cur}>{cur}</SwatchBar.SwatchText>)}
                  </SwatchBar.SwatchGroup>
                </SwatchBar.Root>
              </div>

              <div>
                <div style={{margin: '0.5rem 0'}}><b>locale</b></div>
                <SwatchBar.Root>
                  <SwatchBar.SwatchGroup value={args.locale} onValueChange={(newLocale) => updateArgs({locale: newLocale})}>
                    {locales.map(locale => <SwatchBar.SwatchText key={locale} value={locale}>{locale}</SwatchBar.SwatchText>)}
                  </SwatchBar.SwatchGroup>
                </SwatchBar.Root>
              </div>
            </div>
            <div style={{margin: '0 1rem 1rem'}}>
              <span style={{background: 'gold', padding: '0.25rem', borderRadius: '6px', fontWeight: 600, display: 'inline-block'}}>
                Optional theme
                <SwatchBar.Root style={{display: 'inline-block', marginLeft: '0.5rem', '--lui-swatch-btn-bg-color': 'white', borderRadius: '6px'}  as CSSProperties}>
                  <SwatchBar.SwatchGroup value={args.disableStyles ? 'true' : 'false'} onValueChange={(newDisableStyles) => updateArgs({disableStyles: newDisableStyles === 'true'})}>
                    <SwatchBar.SwatchText value={'false'}>On</SwatchBar.SwatchText>
                    <SwatchBar.SwatchText value={'true'}>Off</SwatchBar.SwatchText>
                  </SwatchBar.SwatchGroup>
                </SwatchBar.Root>
              </span>
              {' '}
              that can be customized with CSS variables
              {' '}
              <SwatchBar.Root style={{display: 'inline-block', marginLeft: '0.5rem'}}>
                <SwatchBar.SwatchGroup value={showcaseTheme} onValueChange={setShowcaseTheme}>
                  {Object.keys(themes).map(theme => <SwatchBar.SwatchText key={theme} value={theme}>{theme}</SwatchBar.SwatchText>)}
                </SwatchBar.SwatchGroup>
              </SwatchBar.Root>
            </div>

            <div style={{margin: '0 1rem', lineHeight: '1.5'}}>
              <span style={{background: 'gold', padding: '0.25rem', borderRadius: '6px', fontWeight: 600}}>Composable architecture</span>, mixin with your own components or just use the hooks and BYOC (bring your own components).
            </div>
            <div style={{margin: '0 1rem', lineHeight: '1.5', fontSize: '0.9rem'}}>
              Try it out on our <a href="https://github.com/bloomreach/web-code-samples" target="_blank" rel="noreferrer">web code samples</a>{' '}
              (Eg., <a href="https://codesandbox.io/p/sandbox/github/bloomreach/web-code-samples/tree/main/examples/facets" target="_blank" rel="noreferrer">Facets</a>, <a href="https://stackblitz.com/github/bloomreach/web-code-samples/tree/main/examples/pixel" target="_blank" rel="noreferrer">Storefront with pixel instrumentation</a>)
            </div>
          </div>
        </Theme>
        <hr />
        <div>
          <Theme {...args} style={themeStyles}>
            <div style={{display: 'flex', gap: '0.5rem', padding: '0 2rem'}}>
              <div style={{flexGrow: 1}}></div>
              <div style={{display: 'flex', gap: '0.5rem'}}>
                <div style={{fontSize: '0.875rem', opacity: 0.5, margin: '0.5rem 0'}}>Sort by</div>
                <SwatchBar.Root>
                  <SwatchBar.SwatchGroup value={sort} onValueChange={setSort}>
                    <SwatchBar.SwatchText value="relevance">Best Match</SwatchBar.SwatchText>
                    <SwatchBar.SwatchText value="price-asc">Price: Low &#8594; High</SwatchBar.SwatchText>
                    <SwatchBar.SwatchText value="price-desc">Price: High &#8594; Low</SwatchBar.SwatchText>
                  </SwatchBar.SwatchGroup>
                </SwatchBar.Root>
              </div>
            </div>

            <div style={{display: 'flex', fontSize: '0.875rem', marginBottom: '1rem'}}>
              <div style={{width: '33%', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                <div><b>FILTERS</b></div>
                <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems:'start'}}>
                  <Tag onDismiss={() => {}}>Walking</Tag>
                  <Tag onDismiss={() => {}}>Dance</Tag>
                  <Tag onDismiss={() => {}}>🚀 Super fast shipping</Tag>
                  <Tag onDismiss={() => {}}><StarFilledIcon /><Number value={3.5} /> &ndash; <Number value={4.5} /></Tag>
                  <Tag onDismiss={() => {}}>
                    <div style={{width: '12px', height: '12px', background: 'linear-gradient( 226.4deg,  rgba(255,26,1,1) 28.9%, rgba(254,155,1,1) 33%, rgba(113,63,254,1) 48.6%, rgba(34,218,1,1) 65.3%, rgba(0,141,254,1) 80.6%, rgba(255,241,0,1) 100.1% )', borderRadius: '50%'}}></div> Rainbow
                  </Tag>
                  <Tag onDismiss={() => {}}>
                    <Price value={100} />{' '}&ndash;{' '}<Price value={200} />
                  </Tag>
                  <Tag onDismiss={() => {}}><b>Size:</b>{' '}<Number value={7.5} />{' '}&ndash;{' '}<Number value={11} /></Tag>
                  <Tag onDismiss={() => {}}><b>Length:</b>{' '}<Number value={100}>m</Number>{' '}&ndash;{' '}<Number value={500}>m</Number></Tag>
                </div>

                <div><b>Activity</b></div>
                <CheckboxGroup.Root value={activity} onChange={setActivity}>
                  <CheckboxGroup.Item value="running">Running</CheckboxGroup.Item>
                  <CheckboxGroup.Item value="walking">Walking</CheckboxGroup.Item>
                  <CheckboxGroup.Item value="tennis">Tennis</CheckboxGroup.Item>
                  <CheckboxGroup.Item value="hiking">Hiking</CheckboxGroup.Item>
                  <CheckboxGroup.Item value="dance">Dance</CheckboxGroup.Item>
                  <CheckboxGroup.Item value="hiit">HIIT</CheckboxGroup.Item>
                </CheckboxGroup.Root>

                <div><b>Color</b></div>
                <CheckboxGroup.Root value={colors} onChange={setColors}>
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
                    <CheckboxGroup.OverflowTrigger />
                  </CheckboxGroup.Overflow>
                </CheckboxGroup.Root>

                <div><b>Price</b></div>
                <CheckboxGroup.Root value={price} onChange={setPrice}>
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
                    <Range.MinValue>m</Range.MinValue>
                    <Range.Separator />
                    <Range.MaxValue>m</Range.MaxValue>
                  </Range.Inputs>
                  <Range.UpdateButton>Update</Range.UpdateButton>
                </Range.Root>
              </div>
              <div style={{width: '66%', padding: '1rem'}}>
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                  <div style={{width: '50%', minWidth: '200px', maxWidth: '300px', display: 'flex', padding: '0.5rem'}}>
                    <ProductCard.Root style={{width: '100%'}}>
                      <ProductCard.Header>
                        <ProductCard.Image src={preview || product.image} alt={product.title} />
                        <ProductCard.FavoriteButton />
                      </ProductCard.Header>
                      <ProductCard.Body>
                        <SwatchBar.Root>
                          <SwatchBar.SwatchGroup value={sku} onValueChange={(newValue) => setSwatch(newValue)}>
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
                    minWidth: '200px',
                    maxWidth: '300px',
                    display: 'flex',
                    padding: '0.5rem',
                    '--lui-pc__badge-background': '#CBC6E9',
                    '--lui-pc__badge-color': 'rebeccapurple'
                    } as CSSProperties}>
                    <ProductCard.Root style={{width: '100%'}}>
                      <ProductCard.Header>
                        <ProductCard.Image src={preview || product.image} alt={product.title} />
                        <ProductCard.FavoriteButton />
                      </ProductCard.Header>
                      <ProductCard.Body>
                        <ProductCard.Badge>Limited Edition</ProductCard.Badge>
                        <ProductCard.Title>{product.title}</ProductCard.Title>
                        <ProductCard.SubTitle>{product.collection}</ProductCard.SubTitle>
                        <SwatchBar.Root style={{width: '100%'}}>
                          <SwatchBar.SwatchGroup style={{flexWrap: 'nowrap',overflowX: 'auto'}} value={sku} onValueChange={(newValue) => setSwatch(newValue)}>
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

                  <div style={{width: '50%', minWidth: '200px', maxWidth: '300px', display: 'flex', padding: '0.5rem'}}>
                    <ProductCard.Root style={{width: '100%'}}>
                      <ProductCard.Header>
                        <ProductCard.Image src={preview || product.image} alt={product.title} />
                        <ProductCard.FavoriteButton />
                      </ProductCard.Header>
                      <ProductCard.Body>
                      <ProductCard.Label>{product.collection}</ProductCard.Label>
                      <ProductCard.Title>{product.title}</ProductCard.Title>
                        <SwatchBar.Root style={{width: '100%'}}>
                          <SwatchBar.SwatchGroup style={{flexWrap: 'nowrap',overflowX: 'auto'}} value={sku} onValueChange={(newValue) => setSwatch(newValue)}>
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

                  <div style={{width: '50%', minWidth: '200px', maxWidth: '300px', display: 'flex', padding: '0.5rem'}}>
                    <ProductCard.Root style={{width: '100%'}}>
                      <ProductCard.Header>
                        <ProductCard.Image src={preview || product.image} alt={product.title} />
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

                  <div style={{width: '50%', minWidth: '200px', maxWidth: '300px', display: 'flex', padding: '0.5rem'}}>
                    <ProductCard.Root style={{width: '100%'}}>
                      <ProductCard.Header>
                        <ProductCard.Image src={preview || product.image} alt={product.title} />
                        <ProductCard.FavoriteButton />
                      </ProductCard.Header>
                      <ProductCard.Body>
                        <ProductCard.Title>{product.title}</ProductCard.Title>
                        <ProductCard.SubTitle>{product.collection}</ProductCard.SubTitle>
                       </ProductCard.Body>
                      <ProductCard.Footer style={{flexDirection: 'row', alignItems: 'self-end'}}>
                        <ProductCard.Price price={product.price} salePrice={product.salePrice} style={{flexGrow: 1}} />
                        <ProductCard.Button variant="primary">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path d="m18.694 14.742 2.082-12.24a.75.75 0 0 1 .74-.624h.984a.75.75 0 0 0 0-1.5h-.984a2.25 2.25 0 0 0-2.218 1.872l-.446 2.621H2.25A1.5 1.5 0 0 0 .794 6.735l1.45 5.8a3.75 3.75 0 0 0 3.638 2.84h11.183l-.404 2.375a.75.75 0 0 1-.74.625H6a.75.75 0 0 0 0 1.5h9.921A2.25 2.25 0 0 0 18.139 18l.552-3.24a.597.597 0 0 0 .003-.019Zm-1.374-.867H5.882A2.25 2.25 0 0 1 3.7 12.171l-1.45-5.8h16.346l-1.276 7.504ZM6.75 21.75a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm8.625-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"/>
                          </svg>
                        </ProductCard.Button>
                      </ProductCard.Footer>
                    </ProductCard.Root>
                  </div>
                  <a href="https://www.bloomreach.com/en/products/loomi" target="_blank" style={{width: '50%', minWidth: '200px', maxWidth: '300px', display: 'flex', padding: '0.5rem', textDecoration: 'none'}}>
                    <ProductCard.Root style={{width: '100%', background: 'linear-gradient(90deg, #0BC3E3 0%, #5BBF8C 30.5%, #A1C751 67%, #CCCE2D 100%)', color: '#fff'}}>
                      <ProductCard.Header>
                        <div style={{fontSize: '1.25rem', fontWeight: 600, padding: '1rem', color: '#fff', lineHeight: '1.3'}}>Experience AI built for Growth</div>
                        <ProductCard.Image src={claritySplash} alt={'Experience AI built for Growth'} />
                      </ProductCard.Header>
                      <ProductCard.Footer style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'end', textAlign: 'center', flexGrow: 1}}>
                        <div>
                          <img style={{ width: '2.5rem' }} src={bloomreachIcon} alt="Bloomreach icon" />
                        </div>
                        <div>
                          <div style={{fontSize: '0.6rem'}}>
                            Powerered by
                          </div>
                          <div style={{fontSize: '1.3rem', fontWeight: 600}}>
                            Loomi
                          </div>
                        </div>
                      </ProductCard.Footer>
                    </ProductCard.Root>
                  </a>
                </div>
              </div>
              </div>
              <Pagination.Root
                count={1000000} page={page} itemsPerPage={itemsPerPage}
                onPageChange={setPage}
                onItemsPerPageChange={setItemsPerPage}
                style={{marginBottom: '1rem'}}
              >
                <Pagination.Overview>
                  <Pagination.Summary />
                </Pagination.Overview>
              </Pagination.Root>
              <Pagination.Root
                count={1000000} page={page} itemsPerPage={itemsPerPage}
                onPageChange={setPage}
                onItemsPerPageChange={setItemsPerPage}
              >
                <Pagination.Overview>
                  <Pagination.ItemsPerPageSelector />
                </Pagination.Overview>
                <Pagination.Navigation>
                  <Pagination.PreviousButton />
                  <Pagination.Pages />
                  <Pagination.NextButton />
                </Pagination.Navigation>
              </Pagination.Root>
          </Theme>
        </div>
      </div>
    );
  },
  args: {
    dir: 'ltr',
    currency: 'USD',
    locale: 'en-US',
    disableStyles: false,
  }
};
