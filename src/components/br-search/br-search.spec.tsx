import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';

import BrSearch from './br-search';

describe('BrSearch', () => {
  it('should render successfully', () => {
    const { container: { firstElementChild } } = render(<BrSearch />);

    expect(firstElementChild).toBeTruthy();
  });
});
