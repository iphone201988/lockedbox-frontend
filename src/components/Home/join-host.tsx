import JoinHostImg from "../../assets/join-us-img.png";

const JoinHost = () => {
  return (
    <div className="py-[60px] max-lg:py-[40px]">
      <div className="max-w-[1440px] px-[40px] mx-auto max-lg:px-[20px]">
        <div className=" relative">
          <img className=" max-md:hidden" src={JoinHostImg} alt="" />
          <div className=" absolute left-[40px] top-[80px] max-mlg:top-[40px] max-lg:top-[16px] max-lg:left-[16px] max-md:relative max-md:left-0 max-md:top-0">
            <h2 className="text-[36px] text-white font-bold text-left leading-[normal] max-lg:text-[26px] max-md:!text-black">
              Earn extra cash. <br />
              Join as a host
            </h2>
            <p className="max-w-[360px] mt-[12px] mb-[30px] text-white text-[18px] leading-[normal] max-mlg:text-[16px] max-lg:mb-[16px] max-md:max-w-[440px] max-md:!text-black">
              Turn your unused space into extra income with us. Whether it's an
              empty garage, basement, or shed, you can help your community while
              earning money effortlessly!
            </p>
            <a
              className="btn-pri !bg-white !text-[#235370] !border-0 max-md:!bg-[#235370] max-md:!text-[#ffffff]"
              href="#"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinHost;
