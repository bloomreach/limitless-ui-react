import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { SearchBox } from './search-box';

describe('SearchBox', () => {
  it('should render successfully', () => {
    const { container: { firstElementChild } } = render(<SearchBox />);

    expect(firstElementChild).toBeTruthy();
  });
});
