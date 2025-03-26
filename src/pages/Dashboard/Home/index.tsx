import CommonListing from "../../../components/Dashboard/CommonListing";
import {
  useDashboardHomeQuery,
  useGetUserQuery,
  useReadNotificationMutation,
} from "../../../redux/api";
import { useEffect, useState } from "react";
import Loader from "../../../components/Loader";
import { getHomeKeys, handleError } from "../../../utils/helper";
import NoListing from "../../../components/Dashboard/NoListing";
import { useNavigate } from "react-router-dom";

const RenterHome = () => {
  const navigate = useNavigate();
  const { data } = useGetUserQuery();
  const [name, setName] = useState("");
  const { data: dashboardHome, isLoading } = useDashboardHomeQuery();
  const [readNotification, { isLoading: loading }] =
    useReadNotificationMutation();
  const [notifications, setNotifications] = useState<HomeNotifications[]>([]);

  const handleReadNotification = async (id: string) => {
    await readNotification({ notificationId: id }).catch((error: any) =>
      handleError(error, navigate)
    );
  };

  useEffect(() => {
    if (data?.success && data?.userExists) {
      let name = "";
      if (data?.userExists.firstName) name = data?.userExists.firstName;
      if (data?.userExists.lastName) name += " " + data?.userExists.lastName;

      if (name) setName(name);
    }
  }, [data]);

  useEffect(() => {
    console.log("dashboardHome::::", dashboardHome);
    if (dashboardHome?.success) {
      const notifications = dashboardHome.notifications.map(
        (notification: any) => {
          const obj = getHomeKeys(
            notification.type,
            data?.userExists.dashboardRole,
            notification.userId?.firstName,
            notification.bookingId?.startDate,
            notification.bookingId?._id,
            notification.listingId?._id
          );
          return {
            id: notification._id,
            spaceType: notification.listingId.spaceType,
            city: notification.listingId.city,
            image: notification.listingId.storageImages[0],
            ...obj,
          };
        }
      );

      setNotifications(notifications);
    }
  }, [dashboardHome]);

  if (isLoading || loading) return <Loader />;

  return (
    <div className="px-[30px] max-lg:px-[20px]">
      <div className=" py-[10px]  border-b border-[#EEEEEE]">
        <h4 className="text-[22px] font-bold">Hello {name}!</h4>
        <p>Let’s see what’s new</p>
      </div>
      <div className="py-[24px] flex flex-col gap-[16px]">
        {notifications.length ? (
          notifications.map((notification) => (
            <CommonListing
              key={notification.id}
              notification={notification}
              onClick={() => handleReadNotification(notification.id)}
            />
          ))
        ) : (
          <NoListing type="requests" />
        )}
      </div>
    </div>
  );
};

export default RenterHome;
