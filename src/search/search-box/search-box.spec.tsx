import { cleanup, createEvent, fireEvent, render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { faker } from '@faker-js/faker';
import { http } from 'msw';
import { createSetupConfigMock } from '../../mocks/configuration.mock';
import { createProductSearchOptionsMock } from '../../mocks/product-search-options.mock';
import { setupMockServer } from '../../mocks/server.mock';
import { SearchBox } from './search-box';
import { SearchType } from './search-box.types';

describe('SearchBox', () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  const configuration = createSetupConfigMock();
  const searchOptions = createProductSearchOptionsMock();

  const server = setupMockServer(configuration);

  const props = {
    name: 'my-searchbox',
    searchType: 'product' as SearchType,
    configuration,
    searchOptions,
    onChange: vi.fn(),
    onSubmit: vi.fn(),
    classNames: {
      label: 'custom-label',
      form: 'custom-form',
      input: 'custom-input',
      submit: 'custom-submit',
    },
    labels: {
      label: 'Search Label',
      placeholder: 'Enter search term',
      submit: 'Search',
    },
  };

  describe('Rendering and Accessibility', () => {
    it('renders a search input and submit button', () => {
      const { getByRole } = render(<SearchBox {...props} />);

      expect(getByRole('textbox')).toBeInTheDocument();
      expect(getByRole('button')).toBeInTheDocument();
    });

    describe('Customized labels', () => {
      it('displays custom label when provided', () => {
        const { getByLabelText } = render(<SearchBox {...props} />);
        expect(getByLabelText(props.labels.label)).toBeInTheDocument();
      });

      it('displays custom placeholder when provided', () => {
        const { getByPlaceholderText } = render(<SearchBox {...props} />);
        expect(getByPlaceholderText(props.labels.placeholder)).toBeInTheDocument();
      });

      it('displays custom submit text when provided', () => {
        const { getByText } = render(<SearchBox {...props} />);
        expect(getByText(props.labels.submit)).toBeInTheDocument();
      });
    });

    it('applies custom class names when provided', () => {
      const { getByRole, getByText } = render(<SearchBox {...props} />);
      expect(getByRole('search')).toHaveClass(props.classNames.form);
      expect(getByRole('textbox')).toHaveClass(props.classNames.input);
      expect(getByText(props.labels.label)).toHaveClass(props.classNames.label);
      expect(getByRole('button')).toHaveClass(props.classNames.submit);
    });
  });

  describe('Form Submission', () => {
    it('submits the search when the user clicks the submit button', () => {
      const { getByRole } = render(<SearchBox {...props} />);

      const input = getByRole('textbox');
      const button = getByRole('button');

      fireEvent.change(input, { target: { value: 'chair' } });
      fireEvent.click(button);

      expect(props.onSubmit).toHaveBeenCalled();
    });

    it('submits the search when the user presses Enter in the input field', () => {
      const { getByRole } = render(<SearchBox {...props} />);

      const input = getByRole('textbox');

      fireEvent.change(input, { target: { value: 'chair' } });
      fireEvent.keyDown(input, { key: 'Enter' });

      expect(props.onSubmit).toHaveBeenCalled();
    });

    it('calls onSubmit prop when form is submitted', () => {
      const { getByRole } = render(<SearchBox {...props} />);

      const form = getByRole('search');
      const input = getByRole('textbox');

      fireEvent.change(input, { target: { value: 'chair' } });
      fireEvent.submit(form);

      expect(props.onSubmit).toHaveBeenCalled();
    });

    it('prevents default form submission behavior', () => {
      const { getByRole } = render(<SearchBox {...props} />);

      const form = getByRole('search');
      const input = getByRole('textbox');

      const submitEvent = createEvent.submit(form);
      const mockPreventDefault = vi.fn();
      submitEvent.preventDefault = mockPreventDefault;

      fireEvent.change(input, { target: { value: 'chair' } });
      fireEvent(form, submitEvent);

      expect(mockPreventDefault).toHaveBeenCalled();
    });
  });

  describe('Auto Query Behavior', () => {
    it('triggers debounced search automatically after user stops typing when autoQuery is true', async () => {
      vi.useFakeTimers();

      const customDebounceDelay = 200;
      const autoQueryProps = { ...props, autoQuery: true, debounceDelay: customDebounceDelay };
      const { getByRole } = render(<SearchBox {...autoQueryProps} />);
      const apiBackend = vi.fn();
      const testQuery1 = faker.commerce.product();
      const testQuery2 = faker.commerce.product();

      server.use(
        http.get(configuration.searchEndpoint, ({ request }) => {
          const params = new URLSearchParams(request.url);
          apiBackend(params.get('q'));
        }),
      );

      const input = getByRole('textbox');

      // Start typing
      fireEvent.change(input, { target: { value: testQuery1 } });
      await vi.advanceTimersByTimeAsync(100);

      // Type more within the set debounce delay
      fireEvent.change(input, { target: { value: testQuery2 } });

      // After the set delay the request should be fired
      await vi.advanceTimersByTimeAsync(customDebounceDelay);
      expect(apiBackend).toHaveBeenCalledWith(testQuery2);
      expect(apiBackend).toHaveBeenCalledTimes(1);

      vi.useRealTimers();
    });

    it('calls onChange prop when input value changes', () => {
      const { getByRole } = render(<SearchBox {...props} />);

      const input = getByRole('textbox');
      fireEvent.change(input, { target: { value: faker.commerce.product() }});

      expect(props.onChange).toHaveBeenCalledTimes(1);
    });
  });
});
