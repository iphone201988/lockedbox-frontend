import GraphImg from '../../../../../assets/graph-img.png'
import EarningIcon from '../../../../../assets/icons/earning-icn.png'
import TotalMoneyIcon from '../../../../../assets/icons/total-money-icn.png'
import OccupancyIcon from '../../../../../assets/icons/occupancy-icn.png'


const HostPerformance = () => {
  return (
    <div className='flex gap-[16px] max-lg:flex-col'>
      <div className="w-full">
        <img className='w-full' src={GraphImg} alt="" />
      </div>
      <div className="w-full flex flex-col gap-[16px]">
        <div className=" border border-[#EEEEEE] rounded-[8px] p-[16px] w-full max-w-[360px]">
        <div className="flex justify-between items-center">
            <p className='text-[20px] font-semibold'>Earning in December</p>
            <span className='p-[6px] rounded-[4px] bg-[#235370]'>
                <img src={EarningIcon} alt="" />
            </span>
        </div>
        <div className="pt-[24px]">
            <p className='text-[32px] font-bold text-[#235370]'>$250</p>
            <p className='text-[14px] text-[#959595]'>You earned $250 in December</p>
        </div>
        </div>

        <div className=" border border-[#EEEEEE] rounded-[8px] p-[16px] w-full max-w-[360px]">
        <div className="flex justify-between items-center">
            <p className='text-[20px] font-semibold'>Total Earning</p>
            <span className='p-[6px] rounded-[4px] bg-[#235370]'>
                <img src={TotalMoneyIcon} alt="" />
            </span>
        </div>
        <div className="pt-[24px]">
            <p className='text-[32px] font-bold text-[#235370]'>$1050</p>
            <p className='text-[14px] text-[#959595]'>Your total earnings YTD</p>
        </div>
        </div>

        <div className=" border border-[#EEEEEE] rounded-[8px] p-[16px] w-full max-w-[360px]">
        <div className="flex justify-between items-center">
            <p className='text-[20px] font-semibold'>Occupancy</p>
            <span className='p-[6px] rounded-[4px] bg-[#235370]'>
                <img src={OccupancyIcon} alt="" />
            </span>
        </div>
        <div className="pt-[24px]">
            <p className='text-[32px] font-bold text-[#235370]'>95%</p>
            <p className='text-[14px] text-[#959595]'>Percent occupancy YTD</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default HostPerformance
