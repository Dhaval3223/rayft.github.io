/**
 *
 * Asynchronously loads the component for WalletCard
 *
 */

import { lazyLoad } from 'utils/loadable';

export const WalletCard = lazyLoad(
  () => import('./index'),
  module => module.WalletCard,
);
