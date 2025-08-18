import { useEffect } from 'react';

const ServiceScrollHandler = () => {
  useEffect(() => {
    const handleScrollToService = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 100);
        }
      }
    };

    handleScrollToService();
    window.addEventListener('hashchange', handleScrollToService);
    return () => window.removeEventListener('hashchange', handleScrollToService);
  }, []);

  return null;
};

export default ServiceScrollHandler;