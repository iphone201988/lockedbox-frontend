import React from 'react'
import CloseIcon from "../../../../assets/icons/close-icn.png";
import BoxImage from "../../../../assets/box-detail-image.png";

const RefundAmountPopup = () => {
  return (
     <div className="w-full h-full bg-[rgba(0,0,0,0.8)] fixed top-0 left-0 z-[9999] flex items-center justify-center">
             <div className="bg-white rounded-[16px] max-w-[600px] w-full p-[20px] relative">
               <button className=" absolute right-[20px] top-[20px]">
                 <img src={CloseIcon} alt="" />
               </button>
               <header className="text-center pb-[20px]">
                 <p className="text-[18px] text-[#235370] font-semibold">
                 Refund Amount
                 </p>
               </header>
               <body className="max-w-full mx-auto">
                 <div className="flex flex-col items-center justify-center border-b border-[#EEEEEE] pb-[10px] mb-[10px]">
                   <img
                     className="w-[130px] h-[115px] rounded-[12px] object-cover"
                     src={BoxImage}
                     alt=""
                   />
                   <p className="text-[18px] font-semibold mt-[10px]">
                   Room for storage in Surrey
                   </p>
                 </div>
                 <div className="mb-[0]">
                   <p className=" font-semibold mb-[6px]">
                   Enter price
                   </p>
                   <div className="w-full max-w-[100%]">
                    <input type="text" className="border w-full border-[#EEEEEE] py-[20px] px-[16px] rounded-2xl cursor-pointer" placeholder='Enter price' />
                   </div>
                 </div>       
                 <div className="flex justify-end gap-[10px]">
                   <button className="btn-pri !block mt-[16px]">Refund</button>
                 </div>
               </body>
             </div>
           </div>
  )
}

export default RefundAmountPopup
