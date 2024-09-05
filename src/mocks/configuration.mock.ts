import type { Configuration } from '@bloomreach/discovery-web-sdk';
import { faker } from '@faker-js/faker';

export function createSetupConfigMock(overrides?: Partial<Configuration>): Required<Configuration> {
  const defaults: Configuration = {
    searchEndpoint: 'https://core.dxpapi.com/api/v1/core/',
    suggestEndpoint: 'https://suggest.dxpapi.com/api/v2/suggest/',
    widgetEndpoint: 'https://pathways.dxpapi.com/api/v2/widgets/',
    account_id: parseFloat(faker.string.numeric(4)),
    domain_key: `${faker.string.alpha(4)}_com`,
    auth_key: faker.string.alphanumeric(13),
    view_id: faker.string.alphanumeric(5),
    debug: false,
  };

  return Object.assign(defaults, overrides) as Required<Configuration>;
}
