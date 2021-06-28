import { lazyLoad } from 'utils/loadable';

export const HomePageMain = lazyLoad(
  () => import('./index'),
  module => module.Home,
);

export default HomePageMain;
