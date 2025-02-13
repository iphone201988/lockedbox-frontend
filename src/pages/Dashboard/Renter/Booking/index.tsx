import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import BookingCard from "../../../../components/Dashboard/BookingCard";
import DisputePopup from "../../../../components/Popups/DisputePopup";
import NoBooking from "../../../../components/Dashboard/NoBooking";

const RenterBooking = () => {
  return (
    <div className="px-[30px] py-[32px] max-lg:px-[20px]">
      <Tabs className={" border-0"}>
        <TabList>
          <Tab>Future</Tab>
          <Tab>Current</Tab>
          <Tab>Past</Tab>
          <Tab>Dispute</Tab>
        </TabList>

        <TabPanel>
          <div className=" flex flex-col gap-[16px]">
            <BookingCard type="future" />
            <BookingCard type="future" />
          </div>
        </TabPanel>
        <TabPanel>
          {/* if no booking */}
          {/* <NoBooking /> */}

          {/* if booking */}
          <div className=" flex flex-col gap-[16px]">
            <BookingCard type="current" />
            <BookingCard type="current" />
            <BookingCard type="current" />
          </div>
        </TabPanel>
        <TabPanel>
          <div className=" flex flex-col gap-[16px]">
            <BookingCard type="past" />
            <BookingCard type="past" />
            <BookingCard type="past" />
          </div>
        </TabPanel>
        <TabPanel>
          <div className=" flex flex-col gap-[16px]">
            <BookingCard type="dispute" />
            <BookingCard type="dispute" />
            <BookingCard type="dispute" />
          </div>
        </TabPanel>
      </Tabs>

      {/* booking popus */}
      {/* <DisputePopup/> */}
    </div>
  );
};

export default RenterBooking;
