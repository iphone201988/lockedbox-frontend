import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CommonListing from "../../../../components/Dashboard/CommonListing";
import YourReviews from "../../../../components/Dashboard/Review";

const RenterReviews = () => {
  return (
    <div className="px-[30px] py-[32px] max-lg:px-[20px]">
      <Tabs className={" border-0"}>
        <TabList>
          <Tab>Review a host</Tab>
          <Tab>Your reviews</Tab>
        </TabList>

        <TabPanel>
          <div className=" flex gap-[16px] flex-col">
            <CommonListing
              type="Review"
              btnTxt="Begin Review"
              path="/dashboard/reviews/give-review"
            />
            <CommonListing
              type="Review"
              btnTxt="Begin Review"
              path="/dashboard/reviews/give-review"
            />
          </div>
        </TabPanel>
        <TabPanel>
          <div className=" flex gap-[16px] flex-wrap">
            <YourReviews />
            <YourReviews />
            <YourReviews />
            <YourReviews />
            <YourReviews />
            <YourReviews />
            <YourReviews />
            <YourReviews />
            <YourReviews />
            <YourReviews />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default RenterReviews;
