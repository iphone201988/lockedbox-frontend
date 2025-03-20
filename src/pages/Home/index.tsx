import BannerHome from "../../components/Home/banner-home";
import HowToRent from "../../components/Home/how-to-rent";
import HostWithUs from "../../components/Home/host-with-us";
import JoinHost from "../../components/Home/join-host";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Listings from "../../components/Home/listings";
import Store from "../../components/Home/store";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLazyGetUserQuery } from "../../redux/api";
import { getToken } from "../../utils/helper";

const Home = () => {
  const location = useLocation();
  const token = getToken();

  const [findUser, { data }] = useLazyGetUserQuery();

  useEffect(() => {
    if (location.state?.scrollTo) {
      document
        .getElementById(location.state.scrollTo)
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  useEffect(() => {
    if (token) {
      (async () => {
        await findUser().unwrap();
      })();
    }
  }, []);

  return (
    <>
      <NavBar />
      <BannerHome />
      <Listings />
      <Store />
      <HowToRent />
      <HostWithUs />
      {(!token || data?.userExists?.dashboardRole === "rent") && (
        <JoinHost />
      )}
      <Footer />
    </>
  );
};

export default Home;
