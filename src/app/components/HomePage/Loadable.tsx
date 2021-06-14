import { lazyLoad } from 'utils/loadable';

export const HomePageMain = lazyLoad(
  () => import('./index'),
  module => module.HomePage,
);

export default HomePageMain;
