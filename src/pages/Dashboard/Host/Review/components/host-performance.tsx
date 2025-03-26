import EarningIcon from "../../../../../assets/icons/earning-icn.png";
import TotalMoneyIcon from "../../../../../assets/icons/total-money-icn.png";
import OccupancyIcon from "../../../../../assets/icons/occupancy-icn.png";
import HostGraph from "./host-graph";
import { useGetUserEarningsQuery } from "../../../../../redux/api";
import { useEffect, useState } from "react";
import Loader from "../../../../../components/Loader";
import moment from "moment";

const HostPerformance = () => {
  const [earnings, setEarnings] = useState({
    lastestMonthEarning: 0,
    occupancyRate: 0,
    totalEarnings: 0,
  });
  const [graphData, setGraphData] = useState([]);
  const { data, isLoading } = useGetUserEarningsQuery();
  const currentMonth = moment().format("MMMM");
  useEffect(() => {
    if (data?.success) {
      setEarnings({
        lastestMonthEarning: data.lastestMonthEarning,
        occupancyRate: data.occupancyRate,
        totalEarnings: data.totalEarnings,
      });
      setGraphData(data.monthlyEarnings);
    }
  }, [data]);
  return (
    <div className="flex gap-[16px] max-lg:flex-col">
      {isLoading && <Loader />}
      <div className="w-full">
        {graphData && <HostGraph graphData={graphData} />}
      </div>
      <div className="w-full flex flex-col gap-[16px]">
        <div className=" border border-[#EEEEEE] rounded-[8px] p-[16px] w-full max-w-[360px]">
          <div className="flex justify-between items-center">
            <p className="text-[20px] font-semibold">
              Earning in {currentMonth}
            </p>
            <span className="p-[6px] rounded-[4px] bg-[#235370]">
              <img src={EarningIcon} alt="" />
            </span>
          </div>
          <div className="pt-[24px]">
            <p className="text-[32px] font-bold text-[#235370]">
              ${earnings.lastestMonthEarning}
            </p>
            <p className="text-[14px] text-[#959595]">
              Current monthly earnings ${earnings.lastestMonthEarning}
            </p>
          </div>
        </div>

        <div className=" border border-[#EEEEEE] rounded-[8px] p-[16px] w-full max-w-[360px]">
          <div className="flex justify-between items-center">
            <p className="text-[20px] font-semibold">Total Earning</p>
            <span className="p-[6px] rounded-[4px] bg-[#235370]">
              <img src={TotalMoneyIcon} alt="" />
            </span>
          </div>
          <div className="pt-[24px]">
            <p className="text-[32px] font-bold text-[#235370]">
              ${earnings.totalEarnings}
            </p>
            <p className="text-[14px] text-[#959595]">
              Your total earnings YTD
            </p>
          </div>
        </div>

        <div className=" border border-[#EEEEEE] rounded-[8px] p-[16px] w-full max-w-[360px]">
          <div className="flex justify-between items-center">
            <p className="text-[20px] font-semibold">Occupancy</p>
            <span className="p-[6px] rounded-[4px] bg-[#235370]">
              <img src={OccupancyIcon} alt="" />
            </span>
          </div>
          <div className="pt-[24px]">
            <p className="text-[32px] font-bold text-[#235370]">
              {earnings.occupancyRate}%
            </p>
            <p className="text-[14px] text-[#959595]">Percent occupancy YTD</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostPerformance;
