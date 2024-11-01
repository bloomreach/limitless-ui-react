import { Meta, StoryObj } from '@storybook/react';

import { Theme } from '../theme';
import { Currency} from './';

const meta: Meta<typeof Currency> = {
  title: 'COMPONENTS/Currency',
  component: Currency,
  tags: ['autodocs'],
  args: {},
};

const currencies = ['USD', 'EUR', 'GBP', 'INR', 'AED', 'CNY', 'JPY'];
const locales = ['en-US', 'nl-NL', 'sk-SK', 'ja-JP', 'hi-IN', 'ar-AE', 'zh-CN'];

export default meta;

export type Story = StoryObj<typeof Currency>;

export const Grid: Story = {
  render: (args) => {
    return (
      <Theme>
        <table>
          <thead>
            <tr>
              <td></td>
              {locales.map(locale => (<td style={{padding: '0.5rem', fontWeight: '600'}} key={locale}>{locale}</td>))}
            </tr>
          </thead>
          <tbody>
            {currencies.map(currency => (
              <tr key={currency}>
                <td style={{padding: '0.5rem', fontWeight: '600'}}>{currency}</td>
                {locales.map(locale => (
                  <td style={{padding: '0.5rem'}} key={locale}>
                    <Currency {...args} currency={currency} locale={locale} style={{color: 'green'}} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Theme>
    );
  },
  args: {
    className: 'custom-class-name',
  },
};

export const Playground: Story = {
  render: (args) => {
    return (
      <Theme style={{width: '300px'}}>
        <Currency {...args} />
      </Theme>
    );
  },
  args: {
    className: 'custom-class-name',
    currency: 'USD',
    locale: 'en-US',
  },
};

