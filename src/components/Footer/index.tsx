import { Link } from "react-router-dom";
import FooterLogo from "../../assets/footer-logo.png";
import { FacebookIcon, InstagramIcon, LinkedInIcon } from "../../icons";

const Footer = () => {
  return (
    <footer className="bg-[#252525] text-[#ffffff]">
      <div className="max-w-[1440px] px-[40px] mx-auto max-lg:px-[20px]">
        <div className="py-10 flex justify-between border-b border-[#ffffff] max-md:flex-col max-md:gap-[20px]">
          <div className="">
            <img className="max-w-[158px]" src={FooterLogo} alt="" />
            <p className=" font-[300] max-w-[400px] mt-5 max-md:text-[14px]">
              Founded in 2024, we are a peer-to-peer storage sharing platform
              that seeks to provide communities with a more affordable and
              convenient alternative to traditional self storage
            </p>
          </div>
          <div className="flex gap-10 max-lg:gap-[16px] flex-wrap">
            <div className=" flex flex-col gap-2 max-sm:max-w-[150px] max-sm:w-full">
              <p className="text-[18px] text-[#235370] font-semibold monts-font max-md:text-[16px]">
                Services
              </p>
              <Link to="/search">Find Storage</Link>
            </div>
            <div className=" flex flex-col gap-2 max-sm:max-w-[150px] max-sm:w-full ">
              <p className="text-[18px] text-[#235370] font-semibold monts-font max-md:text-[16px]">
                Links
              </p>
              <Link to="#">Home</Link>
            </div>
            <div className=" flex flex-col gap-2 max-sm:max-w-[150px] max-sm:w-full">
              <p className="text-[18px] text-[#235370] font-semibold monts-font max-md:text-[16px]">
                Support
              </p>
              <Link to="/faq">FAQ</Link>
              <Link to="/contact-us">Contact Us</Link>
              <Link to="/support-centre">Support Centre</Link>
            </div>
            <div className=" flex flex-col gap-2 max-sm:max-w-[150px] max-sm:w-full">
              <p className="text-[18px] text-[#235370] font-semibold monts-font max-md:text-[16px]">
                Company
              </p>
              <Link to="/about-us">About</Link>
              <Link to="#">Press</Link>
              <Link to="#">Job Openings</Link>
              <Link to="#">Partners</Link>
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-between py-10 max-md:py-[24px] max-sm:flex-col max-sm:gap-[16px]">
          <p className=" max-md:text-14px">© 2024 LockedBox Ltd.</p>
          <div className="social-media flex gap-4 cursor-pointer max-md:gap-[8px]">
            <Link
              to="https://www.facebook.com/profile.php?id=61574821676938"
              target="__blank"
            >
              <FacebookIcon />
            </Link>
            <Link to="https://www.instagram.com/lockedboxca/" target="__blank">
              <InstagramIcon />
            </Link>
            <Link
              to="https://www.linkedin.com/company/lockedbox-storage-sharing"
              target="__blank"
            >
              <LinkedInIcon />
            </Link>
          </div>
          <p className="max-md:text-14px">
            <Link to="/privacy-policy">Privacy</Link> |
            <Link to="/terms-and-conditions"> Terms </Link>|{" "}
            <Link to="/contact-us">Help</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
