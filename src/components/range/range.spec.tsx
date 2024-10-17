import { afterEach, describe, it, expect, vi } from 'vitest';
import { cleanup, render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Range } from './';

describe('Range', () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('should render successfully', () => {
    const { getAllByRole, getByLabelText } = render(
      <Range.Root min={10} max={90} value={[40, 70]}>
        <Range.Slider />
        <Range.Inputs>
          <Range.MinInput />
          <Range.Separator />
          <Range.MaxInput />
        </Range.Inputs>
        <Range.UpdateButton>Update</Range.UpdateButton>
      </Range.Root>
    );

    const minInput = getByLabelText('Minimum value') as HTMLInputElement;
    const maxInput = getByLabelText('Maximum value') as HTMLInputElement;

    expect(getAllByRole('slider')).toHaveLength(2);
    expect(minInput).toBeInTheDocument();
    expect(maxInput).toBeInTheDocument();
    expect(minInput.value).toBe('40');
    expect(maxInput.value).toBe('70');
  });

  it('should call onChange when input values are changed', async () => {
    const defaultProps = {
      min: 0,
      max: 100,
      step: 1,
      value: [25, 75] as [number, number],
      onChange: vi.fn(),
    };
    const user = userEvent.setup();
    const { getByLabelText } = render(
      <Range.Root {...defaultProps}>
        <Range.Slider />
        <Range.Inputs>
          <Range.MinInput />
          <Range.Separator />
          <Range.MaxInput />
        </Range.Inputs>
        <Range.UpdateButton>Update</Range.UpdateButton>
      </Range.Root>
    )
    const minInput = getByLabelText('Minimum value') as HTMLInputElement;

    await user.type(minInput, '{backspace}0');
    expect(defaultProps.onChange).toHaveBeenCalledWith([20, 75]);
  });

  it('should only call onChange when manually triggered when autoUpdate is false', async () => {
    const defaultProps = {
      min: 0,
      max: 100,
      step: 1,
      value: [25, 75] as [number, number],
      autoUpdate: false,
      onChange: vi.fn(),
    };
    const user = userEvent.setup();
    const { getByText, getByLabelText } = render(
      <Range.Root {...defaultProps}>
        <Range.Slider />
        <Range.Inputs>
          <Range.MinInput />
          <Range.Separator />
          <Range.MaxInput />
        </Range.Inputs>
        <Range.UpdateButton>Update</Range.UpdateButton>
      </Range.Root>
    )
    const minInput = getByLabelText('Minimum value') as HTMLInputElement;

    await user.type(minInput, '{backspace}0');
    expect(defaultProps.onChange).not.toHaveBeenCalled();
    await user.click(getByText('Update'));
    expect(defaultProps.onChange).toHaveBeenCalledWith([20, 75]);
  });
});
