import { clsx } from 'clsx';
import { ForwardedRef, forwardRef, ReactElement } from 'react';

import type { TagProps } from './tag.types';

import './tag.scss';
import { Cross1Icon } from '@radix-ui/react-icons';

/**
 * Tag component to display selected filters that the user can click to remove
 *
 * ### Usage
 *
 * ```tsx
 * import { Tag } from '@bloomreach/limitless-ui-react';
 *
 * <Tag onDismiss={() => {}}>Running</Tag>
 * ```
 */
export const Tag = forwardRef((
  props: TagProps,
  forwardedRef: ForwardedRef<HTMLDivElement> | null,
): ReactElement => {
  const {
    className,
    children,
    onDismiss,
    ...rest
  } = props;

  return (
    <div
      {...rest}
      className={clsx('lui-tag', className)}
      ref={forwardedRef}
    >
      <span className="lui-tag__content">
      {children}
      </span>
      {onDismiss && (
          <button
            className="lui-tag__dismiss-btn"
            onClick={onDismiss}
            aria-label="Dismiss tag"
          >
            <Cross1Icon className="lui-tag__dismiss-btn-icon" />
          </button>
        )}
    </div>
  );
});
