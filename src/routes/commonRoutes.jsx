import HelpAndSupport from '../screens/help-and-support/HelpAndSupport';
import PrivacyPolicy from '../screens/privacy-policy/PrivacyPolicy';
import TermsAndConditions from '../screens/terms-and-conditions/TermsAndConditions';

const commonRoutes = [
  {
    path: '/help-and-support',
    element: <HelpAndSupport />,
  },
  {
    path: '/terms-and-conditions',
    element: <TermsAndConditions />,
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicy />,
  },
];

export default commonRoutes;
