import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Number } from './';

describe('Number', () => {
  it('should render successfully for different values and locales', () => {
    const locales = ['en-US', 'nl-NL', 'sk-SK', 'ja-JP', 'hi-IN', 'ar-AE', 'zh-CN'];
    const values = [0.01, 0.1, 1, 10, 100, 1000, 10000, 100000, 1000000];
    const { container: { firstElementChild } } = render(
      <div>
        {values.map(value => {
          return locales.map(locale => {
            return (<Number key={`${value}-${locale}}`} value={value} locale={locale} />);
          })
        })}
      </div>
    );

    expect(firstElementChild).toMatchSnapshot();
  });
});
