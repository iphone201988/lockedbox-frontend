import React from 'react'
import BoxImage from '../../../../assets/box-detail-image.png'
import USerImage from '../../../../assets/rent-profile-pic.png'

const DisputeResolution = () => {
  return (
       <div className='border border-[#EEEEEE] rounded-[16px] p-[10px] flex items-center justify-between max-md:flex-col max-md:gap-[16px] relative'>
          
                      <div className="flex w-full gap-[12px] max-md:flex-col max-md:w-full ">
                          <img className='w-[130px] h-[115px] object-cover rounded-[10px] max-md:w-full max-md:h-[200px]' src={BoxImage} alt="" />
                          <div className="storage-details flex flex-col gap-[4px] w-full">
                              <p className='text-[18px] font-semibold max-md:text-[16px]'>Warehouse for storage in Langley</p>
                              <div className="flex gap-[12px] w-full">
                                <img className='w-[38px] h-[38px] rounded-full' src={USerImage} alt="" />
                                <textarea className='border border-[#EEEEEE] rounded-[16px] max-w-[360px] w-full p-[12px] h-[80px]' name="" id="">he host space did not match listing. It had pests in it and  was very very messy.</textarea>
                                <div className="flex gap-[8px]">
                                    <img className='w-[60px] h-[60px] rounded-[8px]' src={BoxImage} alt="" />
                                    <img className='w-[60px] h-[60px] rounded-[8px]' src={BoxImage} alt="" />
                                </div>
                              </div>
                          </div>
                      </div>
                     
                      <div className="flex flex-col w-full gap-[6px] items-end max-md:ml-auto">
                          <p className='text-[#959595]'>Requested amount</p>
                          <p className='text-[#235370] font-semibold'>$1263.67</p>
                      </div>

                  </div>
  )
}

export default DisputeResolution
