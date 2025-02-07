import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { Tab, Tabs, TabList } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useEffect, useState } from "react";

const tabRoutes = [
  "/dashboard/account/basic-info",
  "/dashboard/account/profile",
  "/dashboard/account/security",
  "/dashboard/account/notification",
  "/dashboard/account/payment",
];

const RenterAccount = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const index = tabRoutes.findIndex((route) =>
      location.pathname.includes(route)
    );
    setSelectedIndex(index !== -1 ? index : 0);

    if (
      location.pathname == "/dashboard/account/" ||
      location.pathname == "/dashboard/account"
    ) {
      navigate("/dashboard/account/basic-info");
    }
  }, [location.pathname]);

  return (
    <div className="px-[30px] py-[32px]">
      <Tabs
        className="border-0"
        selectedIndex={selectedIndex}
        onSelect={(index) => {
          setSelectedIndex(index);
          navigate(tabRoutes[index]);
        }}
      >
        <TabList>
          <Tab>Basic info</Tab>
          <Tab>Profile</Tab>
          <Tab>Account Security</Tab>
          <Tab>Notification</Tab>
          <Tab>Payment</Tab>
        </TabList>
      </Tabs>
      <Outlet />
    </div>
  );
};

export default RenterAccount;
