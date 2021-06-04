/**
 *
 * Asynchronously loads the component for TextFiled
 *
 */

import { lazyLoad } from 'utils/loadable';

export const TextFiled = lazyLoad(
  () => import('./index'),
  module => module.TextFiled,
);
