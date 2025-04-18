import { useParams } from "react-router-dom";
import CheckInPhotos from "../../../components/check-in-photos";
import { useEffect, useState } from "react";
import { useLazyGetUserCheckInsQuery } from "../../../../../redux/api/admin";
import { usePagination } from "../../../../../hooks/usePagination";
import Loader from "../../../../../components/Loader";

const AdminCheckIN = () => {
  const { id } = useParams();
  const [checkIns, setCheckIns] = useState<any>([]);
  const [getUserCheckIns, { data, isLoading, isFetching }] =
    useLazyGetUserCheckInsQuery();
  const {
    pagination,
    setPagnation,
    scrollableRef,
    handleScroll,
    restoreScrollPosition,
  } = usePagination({
    scrollDown: false,
    fetchData: () => getUserCheckIns({ id, page: pagination.page }),
  });

  useEffect(() => {
    if (data?.success) {
      const { pagination, cleckIns } = data;

      setCheckIns((prev: any) => [...(prev ? prev : []), ...cleckIns]);

      setPagnation((prev: any) => ({
        ...prev,
        totalPages: pagination.totalPages,
      }));
      restoreScrollPosition();
    }
  }, [data]);

  useEffect(() => {
    if (id) {
      getUserCheckIns({ id, page: pagination.page });
    }
  }, []);

  return (
    <div
      className="flex flex-col gap-[16px] h-full overflow-auto no-scrollbar"
      ref={scrollableRef}
      onScroll={handleScroll}
    >
      {(isLoading || isFetching) && <Loader />}
      {checkIns.map((checkIn: any) => (
        <CheckInPhotos checkIn={checkIn} />
      ))}
    </div>
  );
};

export default AdminCheckIN;
