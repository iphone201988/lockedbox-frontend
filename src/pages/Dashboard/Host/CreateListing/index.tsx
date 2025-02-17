import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
// import ListingCompletePopup from "./components/Popup/ListingCompletePopup";

const CreateListing = () => {
  return (
    <div className="px-[30px] py-[32px] max-lg:px-[20px]">
      <Tabs className={"step-form "}>
        <TabList>
          <Tab>
            <div className="step-button flex items-center gap-[12px]">
              <div className="step-number w-[56px] h-[56px] rounded-full text-white flex items-center justify-center text-[20px] !font-semibold">
                1
              </div>
              <div className="">
                <p className="step-count !font-normal">Step 1/3</p>
                <p className=" font-semibold">Basic Information</p>
              </div>
            </div>
          </Tab>
          <Tab>
            <div className="step-button flex items-center gap-[12px] border-l border-r border-[#EEEEEE] max-md:border-0">
              <div className="step-number w-[56px] h-[56px] rounded-full text-white flex items-center justify-center text-[20px] !font-semibold">
                2
              </div>
              <div className="">
                <p className="step-count !font-normal">Step 2/3</p>
                <p className=" font-semibold">Description</p>
              </div>
            </div>
          </Tab>
          <Tab>
            <div className="step-button flex items-center gap-[12px]">
              <div className="step-number w-[56px] h-[56px] rounded-full text-white flex items-center justify-center text-[20px] !font-semibold">
                3
              </div>
              <div className="">
                <p className="step-count !font-normal">Step 3/3</p>
                <p className=" font-semibold">Verification</p>
              </div>
            </div>
          </Tab>
        </TabList>

        <TabPanel>
          <StepOne />
        </TabPanel>
        <TabPanel>
          <StepTwo />
        </TabPanel>
        <TabPanel>
          <StepThree />
        </TabPanel>
      </Tabs>

      {/* create listing compleate popus */}
      <div className="">{/* <ListingCompletePopup/> */}</div>
    </div>
  );
};

export default CreateListing;
