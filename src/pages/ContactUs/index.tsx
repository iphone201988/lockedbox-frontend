import ContactImg from "../../assets/login-img.png";
import BreadCrumbs from "../../components/BreadCrumb";
import ProfileNavbar from "../../components/ProfileNavbar";

const ContactUs = () => {
  return (
    <div>
        <ProfileNavbar/>
      {/* <SecNavBar /> */}
      <div className="px-[40px] max-lg:px-[20px] max-w-[1180px] mx-auto py-[24px]">
        <BreadCrumbs />

        <div className="pt-[24px]">
          <h4 className="text-[36px] font-semibold max-lg:text-[28px]">
            Contact Us
          </h4>
          <div className="p-[16px] border border-[#EEEEEE] rounded-[16px] flex gap-[24px] max-md:flex-col mt-[16px]">
            <div className="w-[50%]  max-md:hidden">
              <img
                className=" rounded-[12px] h-[460px] w-full"
                src={ContactImg}
                alt=""
              />
            </div>
            <div className="w-[50%] max-md:w-full">
              <div className="flex flex-col gap-[16px]">
                <div className="flex gap-[16px]">
                  <div className="w-full">
                    <p className=" font-semibold">First name</p>
                    <input
                      className="w-full border border-[#EEEEEE] px-[16px] py-[20px] rounded-[16px]"
                      type="text"
                      placeholder="Enter first name"
                    />
                  </div>
                  <div className="w-full">
                    <p className=" font-semibold">Last name</p>
                    <input
                      className="w-full border border-[#EEEEEE] px-[16px] py-[20px] rounded-[16px]"
                      type="text"
                      placeholder="Enter last name"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <p className=" font-semibold">Email</p>
                  <input
                    className="w-full border border-[#EEEEEE] px-[16px] py-[20px] rounded-[16px]"
                    type="email"
                    placeholder="Enter email"
                  />
                </div>
                <div className="w-full">
                  <p className=" font-semibold">Message</p>
                  <textarea
                    className="w-full border border-[#EEEEEE] px-[16px] py-[20px] rounded-[16px] h-[180px]"
                    name=""
                    id=""
                  >
                    Enter message...
                  </textarea>
                </div>
                <button className="btn-pri ml-auto">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
