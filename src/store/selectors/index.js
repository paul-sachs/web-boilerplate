import { createSelector } from 'reselect';
import { prop, sortBy, identity } from 'ramda';

const sortBySelf = sortBy(identity);

export const sortList = createSelector(
  prop('list'),
  sortBySelf
);
