import Profile from '../screens/profile/Profile';
import Preferences from '../screens/preferences/Preferences';

const privateRoutes = [
  {
    path: '/profile',
    element: <Profile />,
  },
  {
    path: '/preferences',
    element: <Preferences />,
  },
];

export default privateRoutes;
