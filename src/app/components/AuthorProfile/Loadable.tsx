import { lazyLoad } from 'utils/loadable';

export const AuthorProfile = lazyLoad(
  () => import('./index'),
  module => module.AuthorProfile,
);

export default AuthorProfile;
