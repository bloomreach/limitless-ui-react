import { Meta, StoryObj } from '@storybook/react';
import { CSSProperties, useMemo, useState } from 'react';

import { ProductCard } from './';
import { ProductCardRoot } from './components/product-card-root';
import { SwatchBar } from '../swatch-bar';
import { Theme } from '../theme';
import Shirt from '../../../stories/assets/shirt.jpg';
import RedShirt from '../../../stories/assets/red-shirt.jpg';
import BlueShirt from '../../../stories/assets/blue-shirt.jpg';
import GreenShirt from '../../../stories/assets/green-shirt.jpg';
import ChocolateShirt from '../../../stories/assets/chocolate-shirt.jpg';

const meta: Meta<typeof ProductCardRoot> = {
  title: 'COMPONENTS/ProductCard',
  component: ProductCardRoot,
  tags: ['autodocs'],
  args: {
  },
};

export default meta;

export type Story = StoryObj<typeof ProductCardRoot>;

const product = {
  id: '123',
  brand: 'Acme',
  title: 'Limitless Shirt',
  collection: 'Apparel',
  rating: 4.2,
  numRatings: 23,
  currency: 'USD',
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

export const Basic: Story = {
  render: (args) => {
    const [sku, setSku] = useState<string | undefined>();
    const [preview, setPreview] = useState<string | undefined>();

    function setSwatch(id: string) {
      setSku(id);
      setPreview(product.variants.find(v => v.id === id)?.image);
    }

    return (
      <div style={{width: '300px'}}>
        <Theme>
          <ProductCard.Root
            {...args}
          >
            <ProductCard.Header>
              <ProductCard.Image src={preview || product.image} alt={product.title} />
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
              <ProductCard.Label>{product.collection}</ProductCard.Label>
              <ProductCard.Title>{product.title}</ProductCard.Title>
            </ProductCard.Body>
            <ProductCard.Footer>
              <ProductCard.Price price={product.price} salePrice={product.salePrice} />
              <ProductCard.Button variant="primary">Add to cart</ProductCard.Button>
            </ProductCard.Footer>
          </ProductCard.Root>
        </Theme>
      </div>
    );
  },
  args: {
    className: 'custom-class-name',
  },
};

export const Simple: Story = {
  render: (args) => {
    return (
      <div style={{width: '300px'}}>
        <Theme>
          <ProductCard.Root
            {...args}
          >
            <ProductCard.Header>
              <ProductCard.Image src={product.image} alt={product.title} />
            </ProductCard.Header>
            <ProductCard.Body>
              <ProductCard.Title>{product.title}</ProductCard.Title>
              <ProductCard.SubTitle>{product.collection}</ProductCard.SubTitle>
            </ProductCard.Body>
            <ProductCard.Footer>
            <ProductCard.Price price={product.price} />
              <ProductCard.Button variant="primary">Add to cart</ProductCard.Button>
            </ProductCard.Footer>
          </ProductCard.Root>
        </Theme>
      </div>
    );
  },
};

export const TextSwatches: Story = {
  render: (args) => {
    const [sku, setSku] = useState<string | undefined>();
    const [preview, setPreview] = useState<string | undefined>();

    function setSwatch(id: string) {
      setSku(id);
      setPreview(product.variants.find(v => v.id === id)?.image);
    }

    return (
      <div style={{width: '300px'}}>
        <Theme>
          <ProductCard.Root
            {...args}
          >
            <ProductCard.Header>
              <ProductCard.Image src={preview || product.image} alt={product.title} />
            </ProductCard.Header>
            <ProductCard.Body>
              <ProductCard.Label>{product.collection}</ProductCard.Label>
              <ProductCard.Title>{product.title}</ProductCard.Title>
              <SwatchBar.Root>
                <SwatchBar.SwatchGroup value={sku} onValueChange={(newValue) => setSwatch(newValue)}>
                {
                  product.variants.map((swatch) => {
                    return <SwatchBar.SwatchText key={swatch.id} value={swatch.id}>{swatch.title}</SwatchBar.SwatchText>
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
        </Theme>
      </div>
    );
  },
  args: {
    className: 'custom-class-name',
  },
};


export const ColorSwatches: Story = {
  render: (args) => {
    const [sku, setSku] = useState<string | undefined>();
    const [preview, setPreview] = useState<string | undefined>();

    function setSwatch(id: string) {
      setSku(id);
      setPreview(product.variants.find(v => v.id === id)?.image);
    }

    return (
      <div style={{width: '300px'}}>
        <Theme>
          <ProductCard.Root
            {...args}
          >
            <ProductCard.Header>
              <ProductCard.Image src={preview || product.image} alt={product.title} />
            </ProductCard.Header>
            <ProductCard.Body>
              <ProductCard.Label>{product.collection}</ProductCard.Label>
              <ProductCard.Title>{product.title}</ProductCard.Title>
              <SwatchBar.Root>
                <SwatchBar.SwatchGroup value={sku} onValueChange={(newValue) => setSwatch(newValue)}>
                {
                  product.variants.map((swatch) => {
                    return <SwatchBar.SwatchColor key={swatch.id} value={swatch.id} color={swatch.color} />
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
        </Theme>
      </div>
    );
  },
  args: {
    className: 'custom-class-name',
  },
};


export const ImageSwatches: Story = {
  render: (args) => {
    const [sku, setSku] = useState<string | undefined>();
    const [preview, setPreview] = useState<string | undefined>();

    function setSwatch(id: string) {
      setSku(id);
      setPreview(product.variants.find(v => v.id === id)?.image);
    }

    return (
      <div style={{width: '300px'}}>
        <Theme>
          <ProductCard.Root
            {...args}
          >
            <ProductCard.Header>
              <ProductCard.Image src={preview || product.image} alt={product.title} />
            </ProductCard.Header>
            <ProductCard.Body>
              <SwatchBar.Root>
                <SwatchBar.SwatchGroup value={sku} onValueChange={(newValue) => setSwatch(newValue)}>
                {
                  product.variants.map((swatch) => {
                    return <SwatchBar.SwatchImage key={swatch.id} value={swatch.id}>
                      <img src={swatch.image} alt={swatch.title} />
                    </SwatchBar.SwatchImage>
                  })
                }
                </SwatchBar.SwatchGroup>
                <SwatchBar.Link href={product.href} target="_blank">+3</SwatchBar.Link>
              </SwatchBar.Root>
              <ProductCard.Label>{product.collection}</ProductCard.Label>
              <ProductCard.Title>{product.title}</ProductCard.Title>
            </ProductCard.Body>
            <ProductCard.Footer>
            <ProductCard.Price price={product.price} />
              <ProductCard.Button variant="primary">View options &rsaquo;</ProductCard.Button>
            </ProductCard.Footer>
          </ProductCard.Root>
        </Theme>
      </div>
    );
  },
};

export const BadgesAndFavoriteBtn: Story = {
  render: (args) => {
    const [pressed, setPressed] = useState<boolean>(false);
    return (
      <div style={{width: '300px'}}>
        <Theme>
          <ProductCard.Root
            {...args}
          >
            <ProductCard.Header>
              <ProductCard.Image src={product.image} alt={product.title} />
              <ProductCard.FavoriteButton pressed={pressed} onClick={() => setPressed(!pressed)} />
            </ProductCard.Header>
            <ProductCard.Body>
              <ProductCard.Badge>Limited Edition</ProductCard.Badge>
              <ProductCard.Title>{product.title}</ProductCard.Title>
              <ProductCard.SubTitle>{product.collection}</ProductCard.SubTitle>
            </ProductCard.Body>
            <ProductCard.Footer>
            <ProductCard.PriceRange from={product.price} to={product.price + 100} />
              <ProductCard.Button variant="primary">Add to cart</ProductCard.Button>
            </ProductCard.Footer>
          </ProductCard.Root>
        </Theme>
      </div>
    );
  },
  args: {
    className: 'custom-class-name',
  },
};


export const RTL: Story = {
  render: (args) => {
    const [pressed, setPressed] = useState<boolean>(false);
    const [sku, setSku] = useState<string | undefined>();
    const [preview, setPreview] = useState<string | undefined>();

    function setSwatch(id: string) {
      setSku(id);
      setPreview(product.variants.find(v => v.id === id)?.image);
    }

    return (
      <div style={{width: '300px'}}>
        <Theme dir="rtl">
          <ProductCard.Root
            {...args}
          >
            <ProductCard.Header>
              <ProductCard.Image src={preview || product.image} alt={product.title} />
              <ProductCard.FavoriteButton pressed={pressed} onClick={() => setPressed(!pressed)} />
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
              <ProductCard.Label>{product.collection}</ProductCard.Label>
              <ProductCard.Title>{product.title}</ProductCard.Title>
            </ProductCard.Body>
            <ProductCard.Footer>
              <ProductCard.Price price={product.price} />
              <ProductCard.Button variant="primary">Add to cart</ProductCard.Button>
            </ProductCard.Footer>
          </ProductCard.Root>
        </Theme>
      </div>
    );
  },
  args: {
    className: 'custom-class-name',
  },
};

/**
 * Customize look and feel by changing CSS variables
 */
export const Themes: Story = {
  render: (args) => {
    const [sku, setSku] = useState<string | undefined>();
    const [preview, setPreview] = useState<string | undefined>();

    function setSwatch(id: string) {
      setSku(id);
      setPreview(product.variants.find(v => v.id === id)?.image);
    }

     return (
      <div style={{display: 'flex', gap: '2rem'}}>
        <Theme
          style={{
            width: '300px',
              '--lui-pc__color': 'white',
              '--lui-pc__background': 'black',
              '--lui-pc__btn-background': 'rebeccapurple',
              '--lui-pc__btn-border-color': 'rebeccapurple',
              '--lui-pc__btn-color': 'white',
              '--lui-pc__badge-background': '#CBC6E9',
              '--lui-pc__badge-color': 'rebeccapurple',
              '--lui-swatch__btn-border-color-hover': '#666',
              '--lui-swatch__btn-border-color-active': '#999',
          } as CSSProperties}
        >
          <ProductCard.Root {...args}>
            <ProductCard.Header>
              <ProductCard.Image src={preview || product.image} alt={product.title} />
            </ProductCard.Header>
            <ProductCard.Body>
              <ProductCard.Badge>Limited Edition</ProductCard.Badge>
              <ProductCard.Title>{product.title}</ProductCard.Title>
              <ProductCard.SubTitle>{product.collection}</ProductCard.SubTitle>
              <SwatchBar.Root>
                <SwatchBar.SwatchGroup value={sku} onValueChange={(newValue) => setSwatch(newValue)}>
                {
                  product.variants.map((swatch) => {
                    return <SwatchBar.SwatchColor key={swatch.id} value={swatch.id} color={swatch.color} />
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
        </Theme>
        <Theme
          style={{
            width: '300px',
            '--lui-base__font-family': 'Comic Sans MS, Textile, Cursive',
            '--lui-pc__box-shadow': 'none',
            '--lui-pc__border-radius': 0,
            '--lui-pc__container-padding': 0,
            '--lui-pc__btn-background': 'linear-gradient( 226.4deg,  rgba(255,26,1,1) 28.9%, rgba(254,155,1,1) 33%, rgba(255,241,0,1) 48.6%, rgba(34,218,1,1) 65.3%, rgba(0,141,254,1) 80.6%, rgba(113,63,254,1) 100.1% )',
            '--lui-pc__btn-border-color': 'white',
            '--lui-pc__badge-background': '#fff3e2',
            '--lui-pc__badge-color': '#cc4e00',
          } as CSSProperties}
        >
          <ProductCard.Root {...args}>
            <ProductCard.Header>
              <ProductCard.Image src={preview || product.image} alt={product.title} />
            </ProductCard.Header>
            <ProductCard.Body>
              <ProductCard.Badge>Limited Edition</ProductCard.Badge>
              <ProductCard.Title>{product.title}</ProductCard.Title>
              <ProductCard.SubTitle>{product.collection}</ProductCard.SubTitle>
              <SwatchBar.Root>
                <SwatchBar.SwatchGroup value={sku} onValueChange={(newValue) => setSwatch(newValue)}>
                {
                  product.variants.map((swatch) => {
                    return <SwatchBar.SwatchColor key={swatch.id} value={swatch.id} color={swatch.color} />
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
        </Theme>
      </div>
    );
  },
  args: {
    className: 'custom-class-name',
  },
};

/**
 * Composable and i18n ready
 */
export const Locales: Story = {
  render: (args) => {
    const [sku, setSku] = useState<string | undefined>();
    const [preview, setPreview] = useState<string | undefined>();

    function setSwatch(id: string) {
      setSku(id);
      setPreview(product.variants.find(v => v.id === id)?.image);
    }

    const variations = useMemo(() => {
      return [{
        dir: 'ltr',
        locale: 'en-US',
        currency: 'USD',
        title: 'Limitless Shirt',
        subtitle: 'Apparel',
        atc: 'Add to cart',
      }, {
        dir: 'ltr',
        locale: 'nl-NL',
        currency: 'EUR',
        title: 'Grenzeloos overhemd',
        subtitle: 'Kleding',
        atc: 'Voeg toe aan winkelwagen',
      }, {
        dir: 'ltr',
        locale: 'sk-SK',
        currency: 'EUR',
        title: 'Neobmedzená košeľa',
        subtitle: 'Oblečenie',
        atc: 'Pridať do košíka',
      }, {
        locale: 'ar-AE',
        dir: 'rtl',
        currency: 'AED',
        title: 'قميص لا حدود له',
        subtitle: 'ملابس',
        atc: 'أضف إلى السلة',
      }, {
        dir: 'ltr',
        locale: 'hi-IN',
        currency: 'INR',
        title: 'असीमित शर्ट',
        subtitle: 'परिधान',
        atc: 'कार्ट में जोड़ें',
      }, {
        dir: 'ltr',
        locale: 'zh-CN',
        currency: 'CNY',
        title: '無限襯衫',
        subtitle: '服飾',
        atc: '加入購物車',
      }, {
        dir: 'rtl',
        locale: 'jp-JP',
        currency: 'JPY',
        title: 'リミットレスシャツ',
        subtitle: '衣服',
        atc: 'カートに追加',
      }];
    }, []);

     return (
      <div style={{display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
        {variations.map(variation => (
          <Theme style={{width: '250px', display: 'flex'}} currency={variation.currency} locale={variation.locale} dir={variation.dir as 'ltr' | 'rtl'}>
            <ProductCard.Root {...args}>
              <ProductCard.Header>
                <ProductCard.Image src={preview || product.image} alt={product.title} />
              </ProductCard.Header>
              <ProductCard.Body>
                <ProductCard.Badge>{variation.locale}</ProductCard.Badge>
                <ProductCard.Title>{variation.title}</ProductCard.Title>
                <ProductCard.SubTitle>{variation.subtitle}</ProductCard.SubTitle>
                <SwatchBar.Root>
                  <SwatchBar.SwatchGroup value={sku} onValueChange={(newValue) => setSwatch(newValue)}>
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
                <ProductCard.Button variant="primary">{variation.atc}</ProductCard.Button>
              </ProductCard.Footer>
            </ProductCard.Root>
          </Theme>
        ))}
      </div>
    );
  },
  args: {
    className: 'custom-class-name',
  },
};

/**
 * Bring your own components, HTML and CSS to compose the ProductCard to match your needs
 */
export const MixCustomHTML: Story = {
  render: (args) => {
    return (
      <div style={{width: '300px'}}>
        <Theme>
          <ProductCard.Root
            {...args}
          >
            <ProductCard.Header>
              <ProductCard.Image src={product.image} alt={product.title} />
            </ProductCard.Header>
            <ProductCard.Body>
              <div style={{width: '100%', display: 'flex'}}>
                <div style={{flexGrow: 1}}><ProductCard.Badge>Limited Edition</ProductCard.Badge></div>
                <div style={{fontSize: '0.85rem'}}>{product.rating} ⭐️ <span style={{opacity: '50%'}}>({product.numRatings})</span></div>
              </div>
              <ProductCard.Title>{product.title}</ProductCard.Title>
              <ProductCard.SubTitle>{product.collection}</ProductCard.SubTitle>
            </ProductCard.Body>
            <ProductCard.Footer>
              <ProductCard.Price price={product.price} salePrice={product.salePrice} />
              <ProductCard.Button variant="primary">Add to cart</ProductCard.Button>
            </ProductCard.Footer>
          </ProductCard.Root>
        </Theme>
      </div>
    );
  },
  args: {
    className: 'custom-class-name',
  },
};

