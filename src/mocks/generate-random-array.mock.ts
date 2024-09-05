import { faker } from '@faker-js/faker';

export const generateArray = <T>(fillValue: T): T[] =>
  Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, () => fillValue);

