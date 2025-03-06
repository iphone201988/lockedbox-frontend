import React from 'react'
import BoxImage from '../../../../assets/box-detail-image.png'

const CheckInPhotos = () => {
  return (
   <div className='border border-[#EEEEEE] rounded-[16px] p-[10px] flex items-center justify-between max-md:flex-col max-md:gap-[16px] relative'>
            
                        <div className="flex w-full gap-[12px] max-md:flex-col max-md:w-full ">
                            <img className='w-[130px] h-[115px] object-cover rounded-[10px] max-md:w-full max-md:h-[200px]' src={BoxImage} alt="" />
                            <div className="storage-details flex flex-col gap-[4px] w-full">
                                <p className='text-[18px] font-semibold max-md:text-[16px]'>Warehouse for storage in Langley</p>
                               
                            </div>
                        </div>
                       
                        <div className="flex flex-col w-full gap-[6px] items-end max-md:ml-auto">
                        <div className="flex gap-[8px]">
                                      <img className='w-[60px] h-[60px] rounded-[8px]' src={BoxImage} alt="" />
                                      <img className='w-[60px] h-[60px] rounded-[8px]' src={BoxImage} alt="" />
                                  </div>
                        </div>
  
                    </div>
  )
}

export default CheckInPhotos
