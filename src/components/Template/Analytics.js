import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';
import contact_info from '../../data/ContactInfo';

const { NODE_ENV } = process.env;

if (NODE_ENV === 'production') {
  ReactGA.initialize(contact_info["google-track-id"]);
}

const Analytics = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (NODE_ENV === 'production')
    {
      ReactGA.set({
        page: pathname,
      });
      ReactGA.pageview(pathname);
    }
  }, [pathname]);

  return null;
};

export default Analytics;
