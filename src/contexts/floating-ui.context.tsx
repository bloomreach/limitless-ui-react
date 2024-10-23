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
import type {
  ChangeEvent,
  ChangeEventHandler,
  Dispatch,
  MutableRefObject,
  PropsWithChildren,
  ReactElement,
  SetStateAction,
} from 'react';
import { createContext, useRef, useState } from 'react';

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
    handleAttributeSelect: () => void;
    listRef: MutableRefObject<Array<HTMLElement | null>>;
  };

export const FloatingUIContext = createContext<FloatingUIContextType | null>(null);

export const FloatingUIContextProvider = ({ children }: PropsWithChildren): ReactElement => {
  const [open, setOpen] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const { refs, floatingStyles, context } = useFloating<Element>({
    whileElementsMounted: autoUpdate,
    open: open,
    onOpenChange: setOpen,
    middleware: [
      flip({ padding: 8 }),
      size({
        apply({ rects, availableHeight, elements }) {
          Object.assign(elements.floating.style, {
            width: `${rects.reference.width}px`,
            maxHeight: `${availableHeight}px`,
          });
        },
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

  const handleAttributeSelect = () => {
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
    handleAttributeSelect,
    listRef,
    context,
  };

  return <FloatingUIContext.Provider value={contextValue}>{children}</FloatingUIContext.Provider>;
};
