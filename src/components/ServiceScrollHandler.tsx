import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ServiceScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Wait for the page to render before scrolling
      setTimeout(() => {
        const element = document.getElementById(location.hash.slice(1));
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }, [location]);

  return null;
};

export default ServiceScrollHandler;