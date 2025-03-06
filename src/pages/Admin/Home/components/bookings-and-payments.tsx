import React from 'react'
import BoxImage from '../../../../assets/box-detail-image.png'
import DisputeIcon from '../../../../assets/icons/dispute-icn.png'

const BookingsAndPayments = () => {
  return (
   <div className='border border-[#EEEEEE] rounded-[16px] p-[10px] flex items-center justify-between max-md:flex-col max-md:gap-[16px] relative'>
              <button className=' absolute top-[10px] right-[10px] cursor-pointer max-md:bg-white max-md:p-[4px] rounded-bl-[4px]'>
                  <img src={DisputeIcon} alt="" />
              </button>
                  <div className="flex gap-[12px] max-md:flex-col max-md:w-full ">
                      <img className='w-[130px] h-[115px] object-cover rounded-[10px] max-md:w-full max-md:h-[200px]' src={BoxImage} alt="" />
                      <div className="storage-details flex flex-col gap-[4px]">
                          <p className='text-[18px] font-semibold max-md:text-[16px]'>Room for storage in Surrey</p>
                          <p className='text-[#959595] max-md:text-[14px]'><span className='font-semibold text-black'>Booking Confirmation:</span> 123456789</p>
                          <p className='text-[#959595] max-md:text-[16px]'><span className='font-semibold text-black'>From:</span> May 18/2024 - June 18/2024</p>
                         <p className='mt-auto text-[#959595]'>Paid on June 18/2024 with card <span className='text-[#235370]'>XXXX XXXX XXXX 1234</span></p>
                      </div>
                  </div>
                  <div className=" flex items-center gap-[40px] ml-auto mr-[50px] max-mlg:mr-[20px] max-mlg:gap-[20px] max-md:mr-0">
                      <p className='text-[18px] text-[#959595] max-mlg:text-[16px]'><span className='font-semibold text-black'>Size:</span> 10’x15’</p>
                      <p className='text-[18px] text-[#959595] max-mlg:text-[16px]'>$838.20 total</p>
                  </div>
                  <div className="flex flex-col gap-[6px] items-end max-md:ml-auto">
                      {/* under review btn class */}
                      {/* <button className='btn-yellow'>Under Review</button> */}
      
                      {/* confirmed btn class */}
                      {/* <button className='btn-green'>Confirmed</button> */}
   
                      {/* dispute btn class */}
                      <button className='btn-red'>Refund</button>
                  </div>
                  <a className='text-[14px] text-[#235370] underline ml-[8px] font-semibold absolute bottom-[10px] right-[10px] cursor-pointer max-md:left-0' href="#">View Receipt</a>
              </div>
  )
}

export default BookingsAndPayments
