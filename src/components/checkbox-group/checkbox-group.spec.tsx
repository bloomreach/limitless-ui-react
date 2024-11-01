import { afterEach, describe, it, expect, vi } from 'vitest';
import { cleanup, render, fireEvent } from '@testing-library/react';

import { CheckboxGroup } from './';

describe('CheckboxGroup', () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('should render successfully', () => {
    const defaultProps = {
      value: [] as string[],
      onChange: vi.fn(),
    };

    const { getByLabelText } = render(
      <CheckboxGroup.Root value={defaultProps.value} onChange={defaultProps.onChange}>
        <CheckboxGroup.Item value="red">Red</CheckboxGroup.Item>
        <CheckboxGroup.Item value="blue">Blue</CheckboxGroup.Item>
        <CheckboxGroup.Item value="green">Green</CheckboxGroup.Item>
      </CheckboxGroup.Root>
    );

    expect(getByLabelText('Red')).toBeInTheDocument();
    expect(getByLabelText('Blue')).toBeInTheDocument();
    expect(getByLabelText('Green')).toBeInTheDocument();
  });

  it('should call onChange when input values are changed', () => {
    const defaultProps = {
      value: [] as string[],
      onChange: vi.fn(),
    };

    const { getByLabelText } = render(
      <CheckboxGroup.Root value={defaultProps.value} onChange={defaultProps.onChange}>
        <CheckboxGroup.Item value="red">Red</CheckboxGroup.Item>
        <CheckboxGroup.Item value="blue">Blue</CheckboxGroup.Item>
        <CheckboxGroup.Item value="green">Green</CheckboxGroup.Item>
      </CheckboxGroup.Root>
    );

    fireEvent.click(getByLabelText('Red'));
    expect(defaultProps.onChange).toHaveBeenCalledWith(['red']);
  });

  it('should expand when the expand button is clicked', () => {
    const defaultProps = {
      value: [] as string[],
      onChange: vi.fn(),
    };

    const { getByText, getByLabelText, queryByLabelText } = render(
      <CheckboxGroup.Root value={defaultProps.value} onChange={defaultProps.onChange}>
        <CheckboxGroup.Item value="red">Red</CheckboxGroup.Item>
        <CheckboxGroup.Item value="blue">Blue</CheckboxGroup.Item>
        <CheckboxGroup.Item value="green">Green</CheckboxGroup.Item>
        <CheckboxGroup.Overflow>
            <CheckboxGroup.OverflowContent>
              <CheckboxGroup.Item value="white">White</CheckboxGroup.Item>
              <CheckboxGroup.Item value="black">Black</CheckboxGroup.Item>
            </CheckboxGroup.OverflowContent>
            <CheckboxGroup.OverflowTrigger />
          </CheckboxGroup.Overflow>
      </CheckboxGroup.Root>
    );
    expect(queryByLabelText('White')).not.toBeInTheDocument();

    fireEvent.click(getByText('+ More'));
    expect(getByLabelText('White')).toBeInTheDocument();
    expect(getByLabelText('Black')).toBeInTheDocument();
  });

  it('should collapse when the expand button is clicked when it is in expanded state', () => {
    const defaultProps = {
      value: [] as string[],
      onChange: vi.fn(),
    };

    const { getByText, getByLabelText, queryByLabelText } = render(
      <CheckboxGroup.Root value={defaultProps.value} onChange={defaultProps.onChange}>
        <CheckboxGroup.Item value="red">Red</CheckboxGroup.Item>
        <CheckboxGroup.Item value="blue">Blue</CheckboxGroup.Item>
        <CheckboxGroup.Item value="green">Green</CheckboxGroup.Item>
        <CheckboxGroup.Overflow>
            <CheckboxGroup.OverflowContent>
              <CheckboxGroup.Item value="white">White</CheckboxGroup.Item>
              <CheckboxGroup.Item value="black">Black</CheckboxGroup.Item>
            </CheckboxGroup.OverflowContent>
            <CheckboxGroup.OverflowTrigger />
          </CheckboxGroup.Overflow>
      </CheckboxGroup.Root>
    );

    fireEvent.click(getByText('+ More'));
    expect(getByLabelText('White')).toBeInTheDocument();
    expect(getByLabelText('Black')).toBeInTheDocument();

    fireEvent.click(getByText('- Less'));

    expect(queryByLabelText('White')).not.toBeInTheDocument();
  });
});
