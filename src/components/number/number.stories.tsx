import { Meta, StoryObj } from '@storybook/react';

import { Theme } from '../theme';
import { Number} from './';

const meta: Meta<typeof Number> = {
  title: 'COMPONENTS/Number',
  component: Number,
  tags: ['autodocs'],
  args: {},
};

const numbers = [0.01, 0.1, 1, 10, 100, 1000, 10000, 100000, 1000000];
const locales = ['en-US', 'nl-NL', 'sk-SK', 'ja-JP', 'hi-IN', 'ar-AE', 'zh-CN'];

export default meta;

export type Story = StoryObj<typeof Number>;

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
              {numbers.map(num => (
                <tr key={num}>
                  <td style={{padding: '0.5rem', fontWeight: '600'}}>{num}</td>
                  {locales.map(locale => (
                    <td style={{padding: '0.5rem'}} key={locale}>
                      <Number {...args} value={num} locale={locale} />
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
        <Number {...args} />
      </Theme>
    );
  },
  args: {
    className: 'custom-class-name',
    value: 1000000,
    locale: 'en-US',
  },
};

