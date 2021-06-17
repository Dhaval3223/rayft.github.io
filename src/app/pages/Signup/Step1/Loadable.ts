/**
 *
 * Asynchronously loads the component for Step1
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Step1 = lazyLoad(
  () => import('./index'),
  module => module.Step1,
);
