import clsx from 'clsx';
import { useContext } from 'react';
import { FloatingUIContext } from '../../../contexts';
import { ArrowRight } from '../../../icons/arrow-right';
import { FirstQueryProps } from '../search-box.types';

export const FirstQuery = (props: FirstQueryProps) => {
  const { inputValue, onQuerySelect } = props;

  const floatingUIContext = useContext(FloatingUIContext);

  if (!floatingUIContext) {
    throw new Error('Floating UI Provider is not provided');
  }

  const { getItemProps, listRef, handleQuerySelect } = floatingUIContext;

  return inputValue ? (
    <a
      className={clsx('lui-suggestions-item', 'lui-suggestions-first-query')}
      {...getItemProps({
        ref(node) {
          listRef.current[0] = node;
        },
        onClick(event) {
          handleQuerySelect();
          onQuerySelect?.({ query: inputValue, displayText: inputValue }, event);
        },
      })}
    >
      <span>
        Search for: <span className="lui-suggestions-first-query-value">{inputValue}</span>
      </span>

      <ArrowRight />
    </a>
  ) : (
    <></>
  );
};
