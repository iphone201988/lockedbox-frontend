// src/ga/index.js
import ReactGA from "react-ga4";

export const initGA = () => {
  ReactGA.initialize(import.meta.env.VITE_GOOGLE_ANALYTICS_KEY); // Replace with your Measurement ID
};

export const logPageView = (path: any) => {
  ReactGA.send({ hitType: "pageview", page: path });
};
