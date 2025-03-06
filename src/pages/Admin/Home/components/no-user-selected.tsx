import React from 'react'
import UserIcon from '../../../../assets/icons/admin-user-icn.png'

const IfNoUserSelected = () => {
  return (
    <div className='border border-[#EEEEEE] rounded-[16px] max-w-[400px] flex justify-center items-center gap-[16px] flex-col p-[20px]'>
      <img src={UserIcon} alt="" />
      <p>Please enter a user to begin  management.</p>
      <p className='text-[24px] font-semibold'>Begin your search today!</p>
    </div>
  )
}

export default IfNoUserSelected
