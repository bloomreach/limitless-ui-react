import { SearchResponse } from '@bloomreach/discovery-web-sdk';
import { faker } from '@faker-js/faker';

/*
 * Create array of random length between 1 and 5 and map each index to a value
 */
const generateArray = <T>(fillValue: T): T[] =>
  Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, () => fillValue);

let seed = 0;
const generateUnique = (value: string): string => {
  seed++;
  return `${value} - ${seed}`;
};

/*
 * Create mock object with the option to override any of the generated fake values
 */
export function createSearchResponseMock(overrides?: Partial<SearchResponse>): SearchResponse {
  const defaults: SearchResponse = {
    autoCorrectQuery: faker.lorem.slug(1),
    category_map: {},
    did_you_mean: generateArray(faker.lorem.slug(1)),
    facet_counts: {
      facet_fields: {
        category: generateArray({
          name: faker.lorem.slug(1),
          cat_id: faker.lorem.slug(1),
          cat_name: faker.person.fullName(),
          count: faker.number.int(200),
          crumb: faker.lorem.slug(1),
          parent: faker.lorem.slug(1),
          tree_path: faker.lorem.slug(1),
        }),
      },
      facet_queries: {},
      facet_ranges: {
        price: generateArray({
          count: faker.number.int(200),
          end: faker.number.int(200),
          start: faker.number.int(200),
        }),
      },
    },
    response: {
      docs: generateArray({
        brand: faker.lorem.slug(1),
        description: faker.lorem.slug(1),
        get pid() {
          return generateUnique(faker.lorem.slug(1));
        },
        price: faker.number.int(200),
        price_range: generateArray(faker.number.int(200)),
        promotions: generateArray(faker.lorem.slug(1)),
        sale_price: faker.number.int(200),
        sale_price_range: generateArray(faker.number.int(200)),
        score: faker.number.int(200),
        thumb_image: faker.lorem.slug(1),
        title: faker.lorem.slug(1),
        url: faker.internet.url(),
        variants: generateArray({
          sku_color_group: faker.lorem.slug(1),
          sku_price: faker.number.int(200),
          sku_sale_price: faker.number.int(200),
          sku_swatch_images: generateArray(faker.lorem.slug(1)),
          sku_thumb_images: generateArray(faker.lorem.slug(1)),
          skuid: faker.lorem.slug(1),
        }),
      }),
      maxScore: faker.number.int(200),
      numFound: faker.number.int(200),
      start: faker.number.int(200),
    },
    group_response: generateArray({
      [faker.lorem.word()]: {
        groups: generateArray({
          doclist: {
            docs: generateArray({
              brand: faker.lorem.slug(1),
              description: faker.lorem.slug(1),
              get pid() {
                return generateUnique(faker.lorem.slug(1));
              },
              price: faker.number.int(200),
              price_range: generateArray(faker.number.int(200)),
              promotions: generateArray(faker.lorem.slug(1)),
              sale_price: faker.number.int(200),
              sale_price_range: generateArray(faker.number.int(200)),
              score: faker.number.int(200),
              thumb_image: faker.lorem.slug(1),
              title: faker.lorem.slug(1),
              url: faker.internet.url(),
              variants: generateArray({
                sku_color_group: faker.lorem.slug(1),
                sku_price: faker.number.int(200),
                sku_sale_price: faker.number.int(200),
                sku_swatch_images: generateArray(faker.lorem.slug(1)),
                sku_thumb_images: generateArray(faker.lorem.slug(1)),
                skuid: faker.lorem.slug(1),
              }),
            }),
            maxScore: faker.number.int(200),
            numFound: faker.number.int(200),
            start: faker.number.int(200),
          },
          groupValue: faker.lorem.slug(1),
        }),
        matches: faker.number.int(200),
      },
    }).reduce((acc, next) => Object.assign(acc, next), {}),
    keywordRedirect: {
      'original query': faker.lorem.slug(1),
      'redirected query': faker.lorem.slug(1),
      'redirected url': faker.internet.url(),
    },
    stats: {
      stats_fields: {
        price: {
          max: faker.number.int(200),
          min: faker.number.int(200),
        },
        sale_price: {
          max: faker.number.int(200),
          min: faker.number.int(200),
        },
      },
    },
  };

  return Object.assign(defaults, overrides);
}
