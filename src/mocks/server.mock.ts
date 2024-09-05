import { HttpResponse, http } from 'msw';
import { setupServer } from 'msw/node';
import { afterAll, beforeAll, afterEach } from 'vitest';
import { createSetupConfigMock } from './configuration.mock';
import { createSearchResponseMock } from './search-response.mock';
import { createSuggestResponseMock } from './suggest-response.mock';

export function setupMockServer(configuration = createSetupConfigMock()) {
  const server = setupServer(
    http.get(configuration.searchEndpoint, () => {
      return HttpResponse.json(createSearchResponseMock());
    }),
    http.get(configuration.suggestEndpoint, () => {
      return HttpResponse.json(createSuggestResponseMock());
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

  return server;
}
