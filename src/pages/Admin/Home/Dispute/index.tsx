import { useParams } from "react-router-dom";
import DisputeResolution from "../../components/dispute-resolution";
import { useEffect, useState } from "react";
import { useLazyGetUserDisputesQuery } from "../../../../redux/api/admin";
import { usePagination } from "../../../../hooks/usePagination";
import Loader from "../../../../components/Loader";

const AdminDispute = () => {
  const { id } = useParams();
  const [disputes, setDisputes] = useState<any>([]);
  const [getUserDisputes, { data, isLoading, isFetching }] =
    useLazyGetUserDisputesQuery();
  const {
    pagination,
    setPagnation,
    scrollableRef,
    handleScroll,
    restoreScrollPosition,
  } = usePagination({
    scrollDown: false,
    fetchData: () => getUserDisputes({ id, page: pagination.page }),
  });

  useEffect(() => {
    if (data?.success) {
      const { pagination, disputes } = data;

      setDisputes((prev: any) => [...(prev ? prev : []), ...disputes]);

      setPagnation((prev: any) => ({
        ...prev,
        totalPages: pagination.totalPages,
      }));
      restoreScrollPosition();
    }
  }, [data]);

  useEffect(() => {
    if (id) {
      getUserDisputes({ id, page: pagination.page });
    }
  }, []);

  return (
    <div
      className="flex flex-col gap-[16px] h-full overflow-auto no-scrollbar"
      ref={scrollableRef}
      onScroll={handleScroll}
    >
      {(isLoading || isFetching) && <Loader />}
      {disputes.length ? (
        disputes.map((dispute: any) => <DisputeResolution dispute={dispute} />)
      ) : (
        <></>
      )}
    </div>
  );
};

export default AdminDispute;
