/**
 *
 * Asynchronously loads the component for PageButton
 *
 */

import { lazyLoad } from 'utils/loadable';

export const PageButton = lazyLoad(
  () => import('./index'),
  module => module.PageButton,
);
