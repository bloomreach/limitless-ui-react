import { renderHook, waitFor } from '@testing-library/react';
import { useAutoSuggest } from './autosuggest.hook';
import { autoSuggest, AutosuggestOptions, Configuration, SuggestResponse } from '@bloomreach/discovery-web-sdk';
import { describe, it, expect, vi, beforeEach, Mock } from 'vitest';

vi.mock('@bloomreach/discovery-web-sdk', () => ({
  autoSuggest: vi.fn(),
}));

describe('useAutoSuggest', () => {
  const mockConfiguration: Configuration = {
    account_id: 1234,
    auth_key: '123',
    domain_key: '1234'
  };
  const mockSuggestOptions: AutosuggestOptions = {
    _br_uid_2: '123',
    q: 'test',
    catalog_views: 'test',
    url: 'https://example.com'
  };
  const mockResponse: SuggestResponse = {};

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should initialize with correct default values', () => {
    (autoSuggest as Mock).mockResolvedValue(mockResponse);
    const { result } = renderHook(() => useAutoSuggest(mockConfiguration, mockSuggestOptions));

    expect(result.current.loading).toBe(false);
    expect(result.current.response).toBeNull();
    expect(result.current.error).toBeNull();
  });

  it('should call autoSuggest and update response and loading state correctly on success', async () => {
    (autoSuggest as Mock).mockResolvedValue(mockResponse);

    const { result } = renderHook(() => useAutoSuggest(mockConfiguration, mockSuggestOptions));

    // Wait for the autoSuggest to resolve and the hook to update
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.response).toEqual(mockResponse);
    });

    expect(autoSuggest).toHaveBeenCalledWith(mockConfiguration, mockSuggestOptions);
  });

  it('should update loading and set error correctly on failure', async () => {
    const mockError = new Error('Something went wrong');
    (autoSuggest as Mock).mockRejectedValue(mockError);
  
    const { result } = renderHook(() => useAutoSuggest(mockConfiguration, mockSuggestOptions));
  
    // Wait for the error to be set and loading to be false
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe(mockError);
    });
  });

  it('should call autoSuggest again when suggestOptions change', async () => {
    (autoSuggest as Mock).mockResolvedValue(mockResponse);

    const { result, rerender } = renderHook(
      ({ config, options }) => useAutoSuggest(config, options),
      {
        initialProps: { config: mockConfiguration, options: mockSuggestOptions },
      }
    );

    // Wait for the first autoSuggest call
    await waitFor(() => {
      expect(result.current.response).toEqual(mockResponse);
    });

    expect(autoSuggest).toHaveBeenCalledTimes(1);

    const newSuggestOptions: AutosuggestOptions = {
      _br_uid_2: '123',
      q: 'test',
      catalog_views: 'new_test',
      url: 'https://example.com'
    };

    // Rerender with new suggestOptions
    rerender({ config: mockConfiguration, options: newSuggestOptions });

    // Wait for the second autoSuggest call
    await waitFor(() => {
      expect(result.current.response).toEqual(mockResponse);
    });

    expect(autoSuggest).toHaveBeenCalledTimes(2);
  });

  it('should clear the response if the "q" option is empty', async () => {
    (autoSuggest as Mock).mockResolvedValue(mockResponse);

    const { result, rerender } = renderHook(
      ({ config, options }) => useAutoSuggest(config, options),
      {
        initialProps: { config: mockConfiguration, options: mockSuggestOptions },
      }
    );

    // Wait for the first autoSuggest call
    await waitFor(() => {
      expect(result.current.response).toEqual(mockResponse);
    });

    expect(autoSuggest).toHaveBeenCalledTimes(1);

    const newSuggestOptions: AutosuggestOptions = {
      _br_uid_2: '123',
      q: '',
      catalog_views: 'new_test',
      url: 'https://example.com'
    };

    // Rerender with new suggestOptions
    rerender({ config: mockConfiguration, options: newSuggestOptions });

    // Wait for the second autoSuggest call
    await waitFor(() => {
      expect(result.current.response).toEqual(null);
    });

    expect(autoSuggest).toHaveBeenCalledTimes(1);
  });
});
