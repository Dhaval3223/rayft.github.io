/**
 *
 * Asynchronously loads the component for PaymentSuccess
 *
 */

import { lazyLoad } from 'utils/loadable';

export const PaymentSuccess = lazyLoad(
  () => import('./index'),
  module => module.PaymentSuccess,
);
