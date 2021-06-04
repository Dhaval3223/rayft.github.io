/**
 *
 * Asynchronously loads the component for InputFiled
 *
 */

import { lazyLoad } from 'utils/loadable';

export const InputFiled = lazyLoad(
  () => import('./index'),
  module => module.InputFiled,
);
