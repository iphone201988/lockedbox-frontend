import BannerHome from "../../components/Home/banner-home";
import HowToRent from "../../components/Home/how-to-rent";
import HostWithUs from "../../components/Home/host-with-us";
import JoinHost from "../../components/Home/join-host";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import Listings from "../../components/Home/listings";
import Store from "../../components/Home/store";

const Home = () => {
  return (
    <>
      <NavBar />
      <BannerHome />
      <Listings />
      <Store />
      <HowToRent />
      <HostWithUs />
      <JoinHost />
      <Footer />
    </>
  );
};

export default Home;
