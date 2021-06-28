/**
 * Asynchronously loads the component for HomePage
 */

 import { lazyLoad } from 'utils/loadable';

 export const ExplorePage = lazyLoad(
   () => import('./index'),
   module => module.ExplorePage,
 );
 