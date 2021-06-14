import { lazyLoad } from 'utils/loadable';

export const AuthorTrending = lazyLoad(
  () => import('./index'),
  module => module.AuthorTrending,
);
