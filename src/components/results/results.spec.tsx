import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { Results } from './results';
import { LimitlessUIProvider } from '../../contexts';

describe('Results', () => {
  it('should render successfully', () => {
    const {
      container: { firstElementChild },
    } = render(
      <LimitlessUIProvider>
        <Results resultComponent={() => <></>} />
      </LimitlessUIProvider>,
    );

    expect(firstElementChild).toBeTruthy();
  });
});
