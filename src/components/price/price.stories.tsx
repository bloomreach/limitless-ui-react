import { Meta, StoryObj } from '@storybook/react';

import { Theme } from '../theme';
import { Price} from './';

const meta: Meta<typeof Price> = {
  title: 'COMPONENTS/Price',
  component: Price,
  tags: ['autodocs'],
  args: {},
};

const currencies = ['USD', 'EUR', 'GBP', 'INR', 'AED', 'CNY', 'JPY'];
const locales = ['en-US', 'nl-NL', 'sk-SK', 'ja-JP', 'hi-IN', 'ar-AE', 'zh-CN'];
export default meta;

export type Story = StoryObj<typeof Price>;

export const Grid: Story = {
  render: (args) => {
    return (
      <div>
        <Theme>
          <table>
            <thead>
              <tr>
                <td></td>
                {locales.map(locale => (<td style={{padding: '1rem', fontWeight: '600'}} key={locale}>{locale}</td>))}
              </tr>
            </thead>
            <tbody>
              {currencies.map(currency => (
                <tr key={currency}>
                  <td style={{padding: '0.5rem', fontWeight: '600'}}>{currency}</td>
                  {locales.map(locale => (
                    <td style={{padding: '0.5rem'}} key={locale}>
                      <Price {...args} currency={currency} locale={locale} style={{color: 'green'}} />
                    </td>
                  ))}
                </tr>
              ))}

            </tbody>
          </table>
        </Theme>
      </div>
    );
  },
  args: {
    className: 'custom-class-name',
    value: 1000,
  },
};

export const Playground: Story = {
  render: (args) => {
    return (
      <Theme style={{width: '300px'}}>
        <Price {...args} />
      </Theme>
    );
  },
  args: {
    className: 'custom-class-name',
    value: 100,
    currency: 'USD',
    locale: 'en-US',
  },
};

