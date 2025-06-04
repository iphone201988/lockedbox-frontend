import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    const startTime = Date.now();

    // Track page view
    ReactGA.send({ hitType: "pageview", page: location.pathname });

    // Track time on page
    return () => {
      const duration = (Date.now() - startTime) / 1000;
      ReactGA.event({
        category: "User",
        action: "Time on Page",
        label: location.pathname,
        value: Math.round(duration),
      });
    };
  }, [location]);
};

export default usePageTracking;
