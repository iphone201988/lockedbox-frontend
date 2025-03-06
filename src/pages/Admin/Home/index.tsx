
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import UserAccountDetails from "./components/user-account-details";
import BookingsAndPayments from "./components/bookings-and-payments";
import DisputeResolution from "./components/dispute-resolution";
import CheckInPhotos from "./components/check-in-photos";
import ListingManagement from "./components/listing-management";


const AdminHome = () => {
  return (
    <div className="px-[30px] py-[32px] max-lg:px-[20px]">
      <Tabs className={" border-0"}>
        <TabList>
          <Tab>Account</Tab>
          <Tab>Listing Management</Tab>
          <Tab>Bookings & Payments</Tab>
          <Tab>Dispute Resolution</Tab>
          <Tab>Check In Photos</Tab>
        </TabList>

        <TabPanel>
          {/* <IfNoUserSelected/> */}
          <UserAccountDetails />
        </TabPanel>

        <TabPanel>
          <div className="flex flex-col gap-[16px]">
            <ListingManagement />
            <ListingManagement />
            <ListingManagement />
          </div>
        </TabPanel>

        <TabPanel>
          <div className="flex flex-col gap-[16px]">
            <BookingsAndPayments />
            <BookingsAndPayments />
          </div>
        </TabPanel>

        <TabPanel>
          <div className="flex flex-col gap-[16px]">
            <DisputeResolution />
          </div>
        </TabPanel>

        <TabPanel>
          <div className="flex flex-col gap-[16px]">
            <CheckInPhotos />
          </div>
        </TabPanel>
      </Tabs>

      
 {/* admin popus */}
 <div className="">
  {/* <RefundAmountPopup/> */}
      </div>
    </div>
  );
};

export default AdminHome;
