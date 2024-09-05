import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';
import { render } from '@testing-library/react';
import { describe, it, expect, beforeAll, afterAll } from 'vitest';

import { SearchBox } from './search-box';
import { Configuration, ProductSearchOptions } from '@bloomreach/discovery-web-sdk';
import { afterEach } from 'node:test';

const config = createSetupConfigMock();

const server = setupServer(
  http.get(config.searchEndpoint, () => {
    return HttpResponse.json(createSearchResponseMock());
  }),
);

beforeAll(() => {
  server.listen();
});
afterEach(() => {
  server.resetHandlers();
});
afterAll(() => {
  server.close();
});

describe('SearchBox', () => {
  it('should render successfully', () => {
    const configuration = {} as Configuration;
    const options = {} as ProductSearchOptions;
    const {
      container: { firstElementChild },
    } = render(
      <SearchBox configuration={configuration} searchOptions={options} searchType="product" />,
    );

    expect(firstElementChild).toBeTruthy();
  });
});
