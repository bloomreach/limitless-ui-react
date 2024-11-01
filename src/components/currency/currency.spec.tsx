import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Currency } from './';

describe('Currency', () => {
  it('should render successfully in different currencies and locales', () => {
    const currencies = ['USD', 'EUR', 'GBP', 'INR', 'AED', 'CNY', 'JPY'];
    const locales = ['en-US', 'nl-NL', 'sk-SK', 'ja-JP', 'hi-IN', 'ar-AE', 'zh-CN'];
    const { container: { firstElementChild } } = render(
      <div>
        {locales.map(locale => {
            return currencies.map(currency => {
              return (<Currency key={`${locale}-${currency}`} currency={currency} locale={locale} />);
            });
        })}
      </div>
    );

    expect(firstElementChild).toMatchSnapshot();
  });
});
