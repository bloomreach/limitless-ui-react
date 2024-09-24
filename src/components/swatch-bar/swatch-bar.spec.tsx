import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { SwatchBar } from './';

describe('SwatchBar', () => {
  it('should render successfully', () => {
    const { container: { firstElementChild } } = render(
      <SwatchBar.Root>
        <SwatchBar.SwatchGroup>
          <SwatchBar.SwatchColor value="crimson" color="crimson" disabled />
          <SwatchBar.SwatchColor value="rebeccapurple" color="rebeccapurple" />
          <SwatchBar.SwatchColor value="gold" color="gold" />
        </SwatchBar.SwatchGroup>
      </SwatchBar.Root>
    );

    expect(firstElementChild).toMatchSnapshot();
  });
});
