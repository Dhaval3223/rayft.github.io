/**
 *
 * Asynchronously loads the component for PaymentError
 *
 */

import { lazyLoad } from 'utils/loadable';

export const PaymentError = lazyLoad(
  () => import('./index'),
  module => module.PaymentError,
);
