import cn from 'classnames';
import { ForwardedRef, forwardRef, ReactElement } from 'react';

import type { SearchBoxProps } from './search-box.types';

import './search-box.scss';

/**
 * The component description.
 *
 * ### Usage
 *
 * ```tsx
 * import { SearchBox } from '@bloomreach/limitless-ui-react';
 *
 * export default function MyCustomComponent() {
 *   return <SearchBox>Write an example of component usage</SearchBox>;
 * }
 * ```
 */
export const SearchBox = forwardRef((
  props: SearchBoxProps,
  forwardedRef: ForwardedRef<HTMLDivElement> | null,
): ReactElement => {
  const {
    children,
    ...rest // Capture any other properties to pass them to the root element, like `aria-*`, `data-*`, etc.
  } = props;

  return (
    <div
      {...rest}
      className={cn('lcui-search-box')}
      ref={forwardedRef}
    >
      {children}
    </div>
  );
});

SearchBox.displayName = 'SearchBox';
