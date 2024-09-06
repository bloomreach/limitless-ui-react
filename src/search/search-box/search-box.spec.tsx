import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { createSetupConfigMock } from '../../mocks/configuration.mock';
import { createProductSearchOptionsMock } from '../../mocks/product-search-options.mock';
import { setupMockServer } from '../../mocks/server.mock';
import { SearchBox } from './search-box';
import { SearchBoxProps } from './search-box.types';

describe('SearchBox', () => {
  const configuration = createSetupConfigMock();
  const searchOptions = createProductSearchOptionsMock();

  setupMockServer(configuration);

  it('should call submitHandler when form is submitted', () => {
    const props: SearchBoxProps = {
      configuration,
      searchOptions,
      searchType: 'product',
      onSubmit: vi.fn(),
      name: 'my-searchbox',
    };
    const { getByRole } = render(<SearchBox {...props} />);

    const form = getByRole('form');
    const input = getByRole('textbox');

    fireEvent.change(input, { target: { value: 'chair' } });
    fireEvent.submit(form);

    expect(props.onSubmit).toHaveBeenCalled();
  });
});
