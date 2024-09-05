import { AutosuggestOptions } from '@bloomreach/discovery-web-sdk';
import { faker } from '@faker-js/faker';

/*
 * Create mock object with the option to override any of the generated fake values
 */
export function createAutosuggestOptionsMock(
  overrides?: Partial<AutosuggestOptions>,
): AutosuggestOptions {
  const defaults: AutosuggestOptions = {
    catalog_views: 'product:store1,store2|recipe:premium|articles',
    q: faker.commerce.productName(),
    sort: `${faker.database.column()}+${Math.random() ? 'asc' : 'desc'}`,
    _br_uid_2: faker.string.uuid(),
    request_id: Number(faker.string.numeric(13)),
    url: faker.internet.url(),
    ref_url: faker.internet.url(),
    user_id: faker.string.uuid(),
    callback: 'myCallbackFunction',
  };

  return Object.assign(defaults, overrides);
}
