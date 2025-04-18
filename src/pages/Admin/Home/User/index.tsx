import { Tab, Tabs, TabList } from "react-tabs";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const tabRoutes = [
  "/admin/user/account",
  "/admin/user/listings",
  "/admin/user/bookings",
  "/admin/user/disputes",
  "/admin/user/check-in",
];

const AdminUserHome = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const index = tabRoutes.findIndex((route) =>
      location.pathname.includes(route)
    );
    setSelectedIndex(index !== -1 ? index : 0);

    if (
      location.pathname == "/admin/user/" ||
      location.pathname == "/admin/user"
    ) {
      navigate("/admin/user/account");
    }
  }, [location.pathname]);

  return (
    <div className="px-[30px] py-[32px] max-lg:px-[20px] h-[calc(100%-100px)]">
      <Tabs
        className="border-0"
        selectedIndex={selectedIndex}
        onSelect={(index) => {
          setSelectedIndex(index);
          navigate(id ? `${tabRoutes[index]}/${id}` : tabRoutes[index]);
        }}
      >
        <TabList>
          <Tab>Account</Tab>
          <Tab>Listing Management</Tab>
          <Tab>Bookings & Payments</Tab>
          <Tab>Dispute Resolution</Tab>
          <Tab>Check In Photos</Tab>
        </TabList>
      </Tabs>
      <Outlet />
    </div>
  );
};

export default AdminUserHome;
