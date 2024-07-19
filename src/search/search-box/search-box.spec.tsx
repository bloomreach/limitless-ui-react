import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { SearchBox } from './search-box';
import { Configuration, ProductSearchOptions } from '@bloomreach/discovery-web-sdk';

describe('SearchBox', () => {
  it('should render successfully', () => {
    const configuration = {} as Configuration;
    const options = {} as ProductSearchOptions;
    const {
      container: { firstElementChild },
    } = render(
      <SearchBox configuration={configuration} searchOptions={options} searchType="product" />,
    );

    expect(firstElementChild).toBeTruthy();
  });
});
