import {
  UseFloatingReturn,
  UseInteractionsReturn,
  autoUpdate,
  flip,
  size,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
} from '@floating-ui/react';
import { createContext, useCallback, useRef, useState } from 'react';
import type {
  ChangeEvent,
  ReactElement,
  PropsWithChildren,
  Dispatch,
  SetStateAction,
  ChangeEventHandler,
  MutableRefObject,
} from 'react';

export type FloatingUIContextType = Pick<
  UseFloatingReturn<Element>,
  'refs' | 'floatingStyles' | 'context'
> &
  UseInteractionsReturn & {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    activeIndex: number | null;
    setActiveIndex: Dispatch<SetStateAction<number | null>>;
    handleInputChange: ChangeEventHandler<HTMLInputElement>;
    handleQuerySelect: () => void;
    handleProductSelect: () => void;
    listRef: MutableRefObject<Array<HTMLElement | null>>;
  };

export const FloatingUIContext = createContext<FloatingUIContextType>({} as FloatingUIContextType);

export const FloatingUIContextProvider = ({ children }: PropsWithChildren): ReactElement => {
  const [open, setOpen] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const { refs, floatingStyles, context } = useFloating<Element>({
    whileElementsMounted: autoUpdate,
    open: open,
    onOpenChange: setOpen,
    middleware: [
      flip({ padding: 10 }),
      size({
        apply({ rects, availableHeight, elements }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
            maxHeight: `${availableHeight}px`,
          });
        },
        padding: 10,
      }),
    ],
  });

  const listRef = useRef<Array<HTMLElement | null>>([]);
  const role = useRole(context, { role: 'listbox' });
  const dismiss = useDismiss(context);
  const listNav = useListNavigation(context, {
    listRef,
    activeIndex,
    onNavigate: setActiveIndex,
    virtual: true,
    loop: true,
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
    role,
    dismiss,
    listNav,
  ]);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;

    if (value) {
      setOpen(true);
      setActiveIndex(0);
    } else {
      setOpen(false);
    }
  }

  const handleQuerySelect = () => {
    setOpen(false);
  };

  const handleProductSelect = () => {
    setOpen(false);
  };

  const contextValue: FloatingUIContextType = {
    refs,
    floatingStyles,
    getReferenceProps,
    getFloatingProps,
    getItemProps,
    open,
    setOpen,
    activeIndex,
    setActiveIndex,
    handleInputChange,
    handleQuerySelect,
    handleProductSelect,
    listRef,
    context,
  };

  return <FloatingUIContext.Provider value={contextValue}>{children}</FloatingUIContext.Provider>;
};
