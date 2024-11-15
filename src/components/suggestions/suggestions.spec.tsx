import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { createAutosuggestOptionsMock } from '../../mocks/autosuggest-options.mock';
import { createSetupConfigMock } from '../../mocks/configuration.mock';
import { Suggestions } from './suggestions';
import { SuggestionsProps } from './suggestions.types';

describe('Suggestions', () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  const configuration = createSetupConfigMock();
  const suggestOptions = createAutosuggestOptionsMock();

  const props: SuggestionsProps = {
    configuration,
    suggestOptions,
    inputValue: 'chair',
    setInputValue: () => '',
  };

  it('should render successfully', () => {
    const {
      container: { firstElementChild },
    } = render(<Suggestions {...props} />);

    expect(firstElementChild).toBeNull();
  });
});
