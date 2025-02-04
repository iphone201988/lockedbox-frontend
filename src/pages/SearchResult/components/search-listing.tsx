import React from 'react'
import ListingImg from "../../../assets/Listing-1.png"

const SearchListing = () => {
  return (
    <div className='  cursor-pointer'>
          <div className="relative ">
          <img className='rounded-[16px] w-full' src={ListingImg} alt="" />
          <div className="flex justify-center items-center  bg-[#ffffff] text-[#1f1f1f] rounded-[6px] py-[2px] px-[6px] absolute right-[8px] top-[8px]">
          <span className='flex gap-[4px] items-center'>  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_196_1218)">
<path d="M5.99995 1.23802L7.37259 4.60759L10.9999 4.87669L8.21955 7.22836L9.08987 10.7617L5.99995 8.84295L2.91003 10.7617L3.78034 7.22836L1 4.87669L4.6273 4.60759L5.99995 1.23802Z" fill="#235370"/>
<path d="M5.99995 1.23802L4.6273 4.60759L1 4.87669L3.78034 7.22836L2.91003 10.7617L5.99995 8.84295M5.99995 1.23802L7.37259 4.60759L10.9999 4.87669L8.21955 7.22836L9.08987 10.7617L5.99995 8.84295" stroke="#235370" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_196_1218">
<rect width="12" height="12" fill="white"/>
</clipPath>
</defs>
</svg>
 <b className='text-[13px] font-normal'>4.5</b></span>
    <p className='text-[13px] ml-[4px]'>(7 reviews)</p>
          </div>
          <div className="bg-[#ffffff] text-[#1f1f1f] rounded-[6px] py-[2px] px-[6px] absolute left-[8px] bottom-[8px]"><span className='text-[13px] font-normal'>1.2 km</span></div>
          </div>
          <div className="flex justify-between items-start mt-[6px]">
          <a className=' text-[16px] font-semibold text-[#1f1f1f] block w-[150px] leading-[normal] max-md:w-[120px]' href="#">Garage space</a>
          <span className='text-[#235370] max-md:text-[14px]'>$89/ month</span>
          </div>
        </div>
  )
}

export default SearchListing
