/**
 *
 * Asynchronously loads the component for Step3
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Step3 = lazyLoad(
  () => import('./index'),
  module => module.Step3,
);
