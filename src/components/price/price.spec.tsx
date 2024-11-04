import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Price } from './';

describe('Price', () => {
  it('should render successfully in different currencies and locales', () => {
    const currencies = ['USD', 'EUR', 'GBP', 'INR', 'AED', 'CNY', 'JPY'];
    const locales = ['en-US', 'nl-NL', 'sk-SK', 'ja-JP', 'hi-IN', 'ar-AE', 'zh-CN'];
    const values = [1, 10, 100, 1000, 10000, 100000, 1000000];
    const { container: { firstElementChild } } = render(
      <div>
        {values.map(value => {
          return locales.map(locale => {
            return currencies.map(currency => {
              return (<Price key={`${value}-${locale}-${currency}`} value={value} currency={currency} locale={locale} />);
            });
          })
        })}
      </div>
    );

    expect(firstElementChild).toMatchSnapshot();
  });
});
