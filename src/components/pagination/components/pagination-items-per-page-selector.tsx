import * as Select from '@radix-ui/react-select';
import cn from 'clsx';
import { DEFAULT_ITEMS_PER_PAGE_OPTIONS } from '../pagination-config';
import { usePaginationContext } from '../pagination-context';
import { ChevronDownIcon } from '@radix-ui/react-icons';

export function PaginationItemsPerPageSelector(): JSX.Element | null {
  const paginationCtx = usePaginationContext();

  if (!paginationCtx) {
    throw new Error('PaginationItemsPerPageSelector must be used within a PaginationContext.Provider');
  }

  const { itemsPerPage, itemsPerPageOptions, onItemsPerPageChange } = paginationCtx;

  const options = (itemsPerPageOptions || DEFAULT_ITEMS_PER_PAGE_OPTIONS).map((item) => {
    if (typeof item === 'number') {
      return {
        label: item.toString(),
        value: item,
      };
    }

    return item;
  });

  if (options.length < 2) {
    return null;
  }

  return (
    <Select.Root
      value={itemsPerPage.toString()}
      onValueChange={(value: string) => onItemsPerPageChange?.(parseInt(value))}
      aria-label="Items per page selector"
    >
      <Select.Trigger
        className={cn(
          'lui-pagination-items-per-page-selector',
        )}>
        <Select.Value />
        <ChevronDownIcon/>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content>
          <Select.Viewport role="menu" className="lui-pagination-select-menu">
            {options.map((option) => (
              <Select.Item
                role="menuitem"
                key={option.value}
                value={option.value.toString()}
                className={cn(
                  "lui-pagination-menu-item",
                  {"lui-pagination-menu-item-selected": option.value === itemsPerPage})}
              >
                <Select.ItemText>{option.label}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}

