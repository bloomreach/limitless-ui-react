import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';

import { Pagination } from './';

describe('Pagination', () => {
  beforeEach(() => { cleanup(); });

  it('should call onPageChange when a page is clicked', () => {
    const onPageChange = vi.fn();
    const { getByText } = render(
      <Pagination.Root count={100} page={0} itemsPerPage={10} onPageChange={onPageChange}>
        <Pagination.Overview>
          <Pagination.ItemsPerPageSelector />
          <Pagination.Summary />
        </Pagination.Overview>
        <Pagination.Navigation>
          <Pagination.PreviousButton />
          <Pagination.Pages />
          <Pagination.NextButton />
        </Pagination.Navigation>
      </Pagination.Root>
    );

    fireEvent.click(getByText('2'));
    expect(onPageChange).toHaveBeenCalledWith(1);
  });

  it('should call onItemsPerPageChange when items per page is changed', () => {
    const onItemsPerPageChange = vi.fn();
    const { getByRole, getAllByRole } = render(
      <Pagination.Root
        count={100}
        page={1}
        itemsPerPage={10}
        itemsPerPageOptions={[10, 25, 50]}
        onItemsPerPageChange={onItemsPerPageChange}
      >
       <Pagination.Overview>
          <Pagination.ItemsPerPageSelector />
          <Pagination.Summary />
        </Pagination.Overview>
        <Pagination.Navigation>
          <Pagination.PreviousButton />
          <Pagination.Pages />
          <Pagination.NextButton />
        </Pagination.Navigation>
      </Pagination.Root>
    );

    fireEvent.click(getAllByRole('combobox')[0]);
    screen.getAllByRole('menuitem')[1].click();
    expect(onItemsPerPageChange).toHaveBeenCalledWith(25);
  });

  it('should render with different itemsPerPageOptions', () => {
    const { getAllByRole } = render(
      <Pagination.Root
        count={100}
        page={1}
        itemsPerPage={10}
        itemsPerPageOptions={[5, 10, 20]}
      >
        <Pagination.Overview>
          <Pagination.ItemsPerPageSelector />
          <Pagination.Summary />
        </Pagination.Overview>
        <Pagination.Navigation>
          <Pagination.PreviousButton />
          <Pagination.Pages />
          <Pagination.NextButton />
        </Pagination.Navigation>
      </Pagination.Root>
    );

    fireEvent.click(getAllByRole('combobox')[0]);
    const menuItems = screen.getAllByRole('menuitem');
    expect(menuItems).toHaveLength(3);
    expect(menuItems[0].textContent).toBe('5');
    expect(menuItems[1].textContent).toBe('10');
    expect(menuItems[2].textContent).toBe('20');
  });
});
