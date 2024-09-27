import { PropsWithChildren } from 'react';

export interface ThemeContextProps {
  /**
   * Direction of text on the page
   */
  dir?: 'ltr' | 'rtl',
  /**
   * A valid locale identifier. Eg., en-US, ja-JP, ar-AE, hi-IN, zh-CN
   */
  locale?: string,
  /**
   * A valid ISO 4217 currency code. Eg., USD, EUR, INR, AED, CNY, JPY
   */
  currency?: string,
}

export interface ThemeProps extends PropsWithChildren, ThemeContextProps {
  className?: string,
}

export interface ThemeProviderProps extends PropsWithChildren {
  value: ThemeContextProps,
}
