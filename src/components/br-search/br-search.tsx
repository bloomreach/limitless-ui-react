import cn from 'classnames';
import { ForwardedRef, forwardRef, ReactElement } from 'react';

import type { BrSearchProps } from './br-search.types';

import './br-search.scss';

/**
 * The component description.
 *
 * ### Usage
 *
 * ```tsx
 * import { BrSearch } from '@bloomreach/limitless-commerce-ui-kit';
 *
 * export default function MyCustomComponent() {
 *   return <BrSearch>Write an example of component usage</BrSearch>;
 * }
 * ```
 */
const BrSearch = forwardRef((
  props: BrSearchProps,
  forwardedRef: ForwardedRef<HTMLDivElement> | null,
): ReactElement => {
  const {
    children,
    ...rest // Capture any other properties to pass them to the root element, like `aria-*`, `data-*`, etc.
  } = props;

  return (
    <div
      {...rest}
      className={cn('lcui-br-search')}
      ref={forwardedRef}
    >
      {children}
    </div>
  );
});

BrSearch.displayName = 'BrSearch';

export default BrSearch;
