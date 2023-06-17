import Listing from '../screens/listing/Listing';
import Watch from '../screens/watch/Watch';
import Preview from '../screens/preview/Preview';
import Listview from '../screens/listview/Listview';

const listingRoutes = [
  {
    path: '/:cateogory',
    element: <Listing />,
  },
  {
    path: '/:category/:slug',
    element: <Preview />,
  },
  {
    path: '/:category/:slug/watch',
    element: <Watch />,
  },
  {
    path: ':category/:slug/:season/:episode/watch',
    element: <Watch />,
  },
  {
    path: '/list/:slug',
    element: <Listview />,
  },
];

export default listingRoutes;
