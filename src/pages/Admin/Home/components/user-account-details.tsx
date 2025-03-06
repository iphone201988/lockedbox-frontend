import React from 'react'
import UserProfilePic from '../../../../assets/rent-profile-pic.png'

const UserAccountDetails = () => {
  return (
    <div className="flex flex-col">
        <div className='flex border-b border-[#EEEEEE] pb-[24px] max-md:flex-col max-md:gap-[20px]'>
      <div className="max-w-[380px] w-full max-md:max-w-full">
        <p className='text-[18px] text-[#235370] font-semibold'>User Profile Info</p>
      </div>
      <div className=" max-w-[400px] w-full max-md:max-w-full">
     {/* profile inputs */}
     
      <div className="">
       <img className='w-[120px] h-[120px] object-cover' src={UserProfilePic} alt="" />
       <div className=" flex flex-col gap-[10px] mt-[10px]">
       <p className=' font-semibold'>Full Name: <span className=' font-normal text-[#959595]'>Xander Kerry</span></p>
       <p className=' font-semibold'>User ID: <span className=' font-normal text-[#959595]'>123456789</span></p>
       <p className=' font-semibold'>Email: <span className=' font-normal text-[#959595]'>xander@test.com</span></p>
       <p className=' font-semibold'>Phone: <span className=' font-normal text-[#959595]'>416-871-1216</span></p>
       <p className=' font-semibold'>Account creation: <span className=' font-normal text-[#959595]'>11/04/2022</span></p>
       </div>
      </div>
      </div>
    </div>
        <div className='flex border-b border-[#EEEEEE] py-[24px] max-md:flex-col max-md:gap-[20px]'>
      <div className="max-w-[380px] w-full max-md:max-w-full">
        <p className='text-[18px] text-[#235370] font-semibold'>User Identity Confirmed</p>
      </div>
      <div className=" max-w-[400px] w-full max-md:max-w-full">
     {/* profile inputs */}
     
     <div className=" max-w-[400px] w-full max-md:max-w-full">
        <div className="flex justify-between relative">
            <p className=' font-semibold'>Email address</p>
            <span className='text-[#0BB82B] font-semibold'>Verified</span>
        </div>
        <div className="flex justify-between relative py-[16px]">
            <p className=' font-semibold'>Phone</p>
            <span className='text-[#235370] font-semibold max-mlg:ml-auto max-mlg:mr-[6px]'>Not Confirmed</span>
          
        </div>
        <div className="flex justify-between relative">
            <p className=' font-semibold'>Identification</p>
            <span className='text-[#235370] font-semibold max-mlg:ml-auto max-mlg:mr-[6px]'>Not Confirmed</span>

        </div>
      </div>
      </div>
    </div>
    <button className='btn-pri mt-[24px] ml-auto '>Ban User</button>  
    </div>
  )
}

export default UserAccountDetails
