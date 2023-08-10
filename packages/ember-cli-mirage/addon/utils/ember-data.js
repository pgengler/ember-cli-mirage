import { dependencySatisfies } from '@embroider/macros';
import Model from '@ember-data/model';

/**
  @hide
*/
export const hasEmberData = dependencySatisfies('ember-data', '*');

/**
  @hide
*/
export function isDsModel(m) {
  return m && m.superclass === Model;
}
