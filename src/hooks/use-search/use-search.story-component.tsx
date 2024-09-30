/**
 * This component is used only in the Storybook, since Storybook stories work with a React component
 * to render the arguments and all it's types to work
 */
import {
  Configuration,
} from '@bloomreach/discovery-web-sdk';
import type { UseSearchOptions } from './use-search.types';
import type { SearchType } from '../../components/search-box/search-box.types';

import { ForwardedRef, forwardRef, ReactElement } from 'react';

export const UseSearchStoryComponent = forwardRef((
    _props: {
      searchType: SearchType,
      configuration: Configuration,
      searchOptions: UseSearchOptions,
    },
    _forwardedRef: ForwardedRef<HTMLDivElement> | null,
  ): ReactElement => {
    return (
      <div />
    );
  });
