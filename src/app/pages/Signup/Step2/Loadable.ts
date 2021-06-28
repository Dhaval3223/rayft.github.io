/**
 *
 * Asynchronously loads the component for Step2
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Step2 = lazyLoad(
  () => import('./index'),
  module => module.Step2,
);
