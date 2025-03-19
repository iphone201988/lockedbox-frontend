import { useEffect, useState } from "react";
import FilterIcon from "../../../../../../assets/icons/filter-icn.png";
import PaymentHistoryDetail from "../../../../../../components/PaymentHistoryDetail";
import { useLazyGetTransactionsQuery } from "../../../../../../redux/api";
import Loader from "../../../../../../components/Loader";
import { usePagination } from "../../../../../../hooks/usePagination";

const PaymentHistory = () => {
  const [selectedFilter, setSelectedFilter] = useState("latest");
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [transaction, setTransactions] = useState<any>([]);
  const [getTransactions, { data, isLoading, isFetching }] =
    useLazyGetTransactionsQuery();

  const {
    pagination,
    setPagnation,
    scrollableRef,
    handleScroll,
    restoreScrollPosition,
  } = usePagination({
    scrollDown: false,
    fetchData: () => {
      getTransactions({ page: pagination.page, sort: selectedFilter });
    },
  });

  useEffect(() => {
    getTransactions({ page: 1, sort: selectedFilter });
  }, [selectedFilter]);

  useEffect(() => {
    if (data?.success) {
      const { pagination } = data;
      setTransactions((prev: any) => ([ ...prev, ...data?.transactions ]));

      setPagnation((prev: any) => ({
        ...prev,
        totalPages: pagination.totalPages,
      }));
      restoreScrollPosition();
    }
  }, [data]);

  return (
    <div className="flex flex-col py-[24px] h-full">
      {(isLoading || isFetching) && <Loader />}
      <div className="flex items-center justify-between w-full">
        <div className="max-w-[380px] w-full">
          <p className="text-[18px] text-[#235370] font-semibold">
            Your Payment History
          </p>
          <p className="max-w-[280px] mt-[6px]">View your previous billing.</p>
        </div>
        <div className=" relative">
          <button
            className="flex items-center gap-[6px] cursor-pointer"
            onClick={() => setShowFilters(!showFilters)}
          >
            <p className="text-[#235370] font-semibold">Filter</p>
            <img src={FilterIcon} alt="" />
          </button>
          <div
            className={`${
              showFilters ? "filter-btns-row" : "hidden"
            } shadow border border-[#EEEEEE] bg-white rounded-[16px] p-[10px] flex-col gap-[8px] absolute w-max right-0 top-[30px]`}
          >
            <button
              className={`border border-[#EEEEEE] p-[6px] rounded-[8px] cursor-pointer  hover:bg-[#235370] hover:text-white ${
                selectedFilter == "latest" ? "active" : ""
              }`}
              onClick={() => {
                setSelectedFilter("latest");
                setShowFilters(!showFilters);
              }}
            >
              New to Old
            </button>
            <button
              className={`border border-[#EEEEEE] p-[6px] rounded-[8px] cursor-pointer hover:bg-[#235370] hover:text-white ${
                selectedFilter == "old" ? "active" : ""
              }`}
              onClick={() => {
                setSelectedFilter("old");
                setShowFilters(!showFilters);
              }}
            >
              Old to New
            </button>
          </div>
        </div>
      </div>
      <div
        className="py-[16px] flex flex-col gap-[16px] h-[35vh] overflow-auto max-md:h-full"
        ref={scrollableRef}
        onScroll={handleScroll}
      >
        {transaction.length ? (
          transaction.map((data: any, index: number) => (
            <PaymentHistoryDetail key={index} transaction={data} />
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default PaymentHistory;
