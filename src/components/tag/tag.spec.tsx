import { cleanup, fireEvent, render } from '@testing-library/react';
import { afterEach, describe, it, expect, vi } from 'vitest';

import { Tag } from './tag';

describe('Tag', () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('should render successfully', () => {
    const { getByText } = render(<Tag onDismiss={() => {}}>Running</Tag>);

    expect(getByText('Running')).toBeInTheDocument();
  });

  it('should call on dismiss when the icon button is clicked', () => {
    const onDismiss = vi.fn();

    const { getByLabelText } = render(<Tag onDismiss={onDismiss}>Running</Tag>);

    fireEvent.click(getByLabelText('Dismiss tag'));
    expect(onDismiss).toHaveBeenCalledOnce();
  });
});
