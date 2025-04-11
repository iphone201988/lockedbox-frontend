import ProfileNavbar from "../../components/ProfileNavbar";
import AboutImg1 from "../../../src/assets/about-2.png";
import AboutImg2 from "../../../src/assets/about-1.png";

const AboutUs = () => {
  return <div>
    <ProfileNavbar />
    <div className="px-[40px] max-lg:px-[20px] max-w-[1180px] mx-auto py-[24px]">
    <h4 className="text-[36px] font-semibold max-lg:text-[28px] text-center">
            About Us
          </h4>
          <div className="flex items-center gap-[50px] mt-[80px] max-lg:mt-[40px] max-md:flex-col max-md:gap-[20px]">
            <div className="w-[40%] max-md:w-full">
              <img className="min-h-[340px] max-h-[340px] object-cover w-full h-full rounded-2xl" src={AboutImg1} alt="" />
            </div>
            <div className="w-[60%] max-md:w-full">
              <h2 className="text-[36px] font-bold mb-[16px] max-md:text-[26px]">Who We <span className="text-[#235370]">Are</span></h2>
              <p className="text-[18px] max-w-[520px] max-md:max-w-full max-md:text-[16px]"><b>Locked<span className="text-[#235370]">Box</span></b> is a platform that connects
individuals with unused storage & parking
spaces within homes & businesses. Our
mission is to provide affordable, secure, and
convenient storage solutions for Canadians.</p>
            </div>
          </div>

          <div className="flex items-center gap-[50px] mt-[80px] max-lg:mt-[40px] max-md:flex-col-reverse max-md:gap-[20px]">
          <div className="w-[60%] max-md:w-full">
              <h2 className="text-[36px] font-bold mb-[16px] max-md:text-[26px]">Our <span className="text-[#235370]">Story</span></h2>
              <p className="text-[18px] max-w-[520px] max-md:max-w-full   max-md:text-[16px]">It all began in 2023 when our founder had his
apartment locker broken into within a week of
moving in. He lost his kayak, his skis, and all
of his camping gear. With trust hanging by a
thread, he vowed to store his belongings in
his living space going forward.</p>
              <p className="text-[18px] max-w-[520px] my-[16px]  max-md:text-[16px]">This proved to be a challenge with just a
studio apartment. Then one day, gazing upon
the rows and rows of houses that surrounded
his apartment, he wondered - what if I stored
my stuff there?</p>
<p className="text-[18px] max-w-[520px] my-[16px]  max-md:text-[16px]">That idea became <b>Locked<span className="text-[#235370]">Box</span></b></p>
            </div>
            <div className="w-[40%] max-md:w-full">
              <img className="min-h-[340px] max-h-[340px]  object-cover w-full h-full rounded-2xl" src={AboutImg2} alt="" />
            </div>
           
          </div>
    </div>
  </div>;
};

export default AboutUs;
