import { cleanup, createEvent, fireEvent, render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { faker } from '@faker-js/faker';
import { http } from 'msw';
import { LimitlessUIProvider } from '../../contexts/limitless-ui.provider';
import { createSetupConfigMock } from '../../mocks/configuration.mock';
import { createProductSearchOptionsMock } from '../../mocks/product-search-options.mock';
import { setupMockServer } from '../../mocks/server.mock';
import { SearchBox } from './search-box';
import { SearchBoxProps, SearchType } from './search-box.types';

describe('SearchBox', () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  const configuration = createSetupConfigMock();
  const searchOptions = createProductSearchOptionsMock();

  const server = setupMockServer(configuration);

  const props: SearchBoxProps = {
    name: 'my-searchbox',
    searchType: 'product' as SearchType,
    configuration,
    searchOptions,
    onChange: vi.fn(),
    onSubmit: vi.fn(),
    onReset: vi.fn(),
    classNames: {
      label: 'custom-label',
      form: 'custom-form',
      input: 'custom-input',
      submit: 'custom-submit',
      submitIcon: 'custom-submit-icon',
      reset: 'custom-reset',
      resetIcon: 'custom-reset-icon',
    },
    labels: {
      label: 'Search Label',
      placeholder: 'Enter search term',
      submit: 'Search',
      reset: 'Reset',
    },
  };

  describe('Rendering and Accessibility', () => {
    it('renders a search input and submit button', () => {
      const { getByRole, getByText } = render(
        <LimitlessUIProvider>
          <SearchBox {...props} />
        </LimitlessUIProvider>,
      );

      expect(getByRole('textbox')).toBeInTheDocument();
      expect(getByText(props.labels!.submit!)).toBeInTheDocument();
    });

    describe('Customized labels', () => {
      it('displays custom label when provided', () => {
        const { getByLabelText } = render(
          <LimitlessUIProvider>
            <SearchBox {...props} />
          </LimitlessUIProvider>,
        );
        expect(getByLabelText(props.labels!.label!)).toBeInTheDocument();
      });

      it('displays custom placeholder when provided', () => {
        const { getByPlaceholderText } = render(
          <LimitlessUIProvider>
            <SearchBox {...props} />
          </LimitlessUIProvider>,
        );
        expect(getByPlaceholderText(props.labels!.placeholder!)).toBeInTheDocument();
      });

      it('displays custom submit text when provided', () => {
        const { getByText } = render(
          <LimitlessUIProvider>
            <SearchBox {...props} />
          </LimitlessUIProvider>,
        );
        expect(getByText(props.labels!.submit!)).toBeInTheDocument();
      });

      it('displays custom reset text when provided', () => {
        const { getByText } = render(
          <LimitlessUIProvider>
            <SearchBox {...props} />
          </LimitlessUIProvider>,
        );
        expect(getByText(props.labels!.reset!)).toBeInTheDocument();
      });
    });

    it('applies custom class names when provided', () => {
      const { getByRole, getByText, getAllByRole } = render(
        <LimitlessUIProvider>
          <SearchBox {...props} />
        </LimitlessUIProvider>,
      );
      expect(getByRole('search')).toHaveClass(props.classNames!.form!);
      expect(getByRole('textbox')).toHaveClass(props.classNames!.input!);
      expect(getByText(props.labels!.label!)).toHaveClass(props.classNames!.label!);
      expect(getAllByRole('button').find((e) => e.getAttribute('type') === 'submit')).toHaveClass(
        props.classNames!.submit!,
      );
      expect(getAllByRole('button').find((e) => e.getAttribute('type') === 'reset')).toHaveClass(
        props.classNames!.reset!,
      );
    });
  });

  describe('Form Submission', () => {
    it('submits the search when the user clicks the submit button', () => {
      const { getByRole, getAllByRole } = render(
        <LimitlessUIProvider>
          <SearchBox {...props} />
        </LimitlessUIProvider>,
      );

      const input = getByRole('textbox');
      const button = getAllByRole('button').find((e) => e.getAttribute('type') === 'submit')

      fireEvent.change(input, { target: { value: 'chair' } });
      fireEvent.click(button!);

      expect(props.onSubmit).toHaveBeenCalled();
    });

    it('submits the search when the user presses Enter in the input field', () => {
      const { getByRole } = render(
        <LimitlessUIProvider>
          <SearchBox {...props} />
        </LimitlessUIProvider>,
      );

      const input = getByRole('textbox');

      fireEvent.change(input, { target: { value: 'chair' } });
      fireEvent.keyDown(input, { key: 'Enter' });

      expect(props.onSubmit).toHaveBeenCalled();
    });

    it('calls onSubmit prop when form is submitted', () => {
      const { getByRole } = render(
        <LimitlessUIProvider>
          <SearchBox {...props} />
        </LimitlessUIProvider>,
      );

      const form = getByRole('search');
      const input = getByRole('textbox');

      fireEvent.change(input, { target: { value: 'chair' } });
      fireEvent.submit(form);

      expect(props.onSubmit).toHaveBeenCalled();
    });

    it('prevents default form submission behavior', () => {
      const { getByRole } = render(
        <LimitlessUIProvider>
          <SearchBox {...props} />
        </LimitlessUIProvider>,
      );

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

  describe('Form Reset', () => {
    it('should reset the input value when reset is clicked', () => {
      const query = faker.commerce.product();
      const { getByRole, getAllByRole } = render(
        <LimitlessUIProvider>
          <SearchBox {...props} />
        </LimitlessUIProvider>,
      );

      const input = getByRole('textbox') as HTMLInputElement;
      const reset = getAllByRole('button').find((e) => e.getAttribute('type') === 'reset');

      fireEvent.change(input, { target: { value: query } });
      expect(input.value).toBe(query);

      fireEvent.click(reset!);
      expect(props.onReset).toHaveBeenCalled();
      expect(input.value).toBe('');
    });
  });

  describe('Auto Query Behavior', () => {
    it('triggers debounced search automatically after user stops typing when autoQuery is true', async () => {
      vi.useFakeTimers();

      const customDebounceDelay = 200;
      const autoQueryProps = { ...props, autoQuery: true, debounceDelay: customDebounceDelay };
      const { getByRole } = render(
        <LimitlessUIProvider>
          <SearchBox {...autoQueryProps} />
        </LimitlessUIProvider>,
      );
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
      const { getByRole } = render(
        <LimitlessUIProvider>
          <SearchBox {...props} />
        </LimitlessUIProvider>,
      );

      const input = getByRole('textbox');
      fireEvent.change(input, { target: { value: faker.commerce.product() } });

      expect(props.onChange).toHaveBeenCalledTimes(1);
    });
  });

  describe('SearchBox Icons', () => {
    it('should render the submitIcon prop as a child of the submit button when its provided', () => {
      const iconProps = {
        ...props,
        submitIcon: () => <span>Custom submit icon</span>,
      };

      const { getAllByRole } = render(
        <LimitlessUIProvider>
          <SearchBox {...iconProps} />
        </LimitlessUIProvider>,
      );

      const submitButton = getAllByRole('button').find((e) => e.getAttribute('type') === 'submit');
      const icon = submitButton?.querySelector(`.${props.classNames!.submitIcon!}`);

      expect(icon).toBeInTheDocument();
    });

    it('should render the resetIcon prop as a child of the reset button when its provided', () => {
      const iconProps = {
        ...props,
        resetIcon: () => <span>Custom reset icon</span>,
      };

      const { getAllByRole } = render(
        <LimitlessUIProvider>
          <SearchBox {...iconProps} />
        </LimitlessUIProvider>,
      );

      const resetButton = getAllByRole('button').find((e) => e.getAttribute('type') === 'reset');

      const icon = resetButton?.querySelector(`.${props.classNames!.resetIcon!}`);

      expect(icon).toBeInTheDocument();
    });
  });
});
