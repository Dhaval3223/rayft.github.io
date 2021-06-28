/**
 *
 * Asynchronously loads the component for Step4
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Step4 = lazyLoad(
  () => import('./index'),
  module => module.Step4,
);
