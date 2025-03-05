import { useEffect, useState } from "react";
import { useGetUserQuery } from "../../../redux/api";
import Loader from "../../../components/Loader";
import RenterReviews from "../Renter/Reviews";
import PerformanceAndReviews from "../Host/Review";

const Reviews = () => {
  const { data, isLoading } = useGetUserQuery();
  const [role, setRole] = useState<string>("");

  useEffect(() => {
    if (data?.success) {
      const { dashboardRole } = data?.userExists;
      setRole(dashboardRole);
    }
  }, [data]);
  return (
    <>
      {isLoading && <Loader />}
      {role == "rent" ? <RenterReviews /> : <PerformanceAndReviews />}
    </>
  );
};

export default Reviews;
