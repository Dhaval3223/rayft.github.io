/**
 *
 * Asynchronously loads the component for Followercard
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Followercard = lazyLoad(
  () => import('./index'),
  module => module.Followercard,
);
