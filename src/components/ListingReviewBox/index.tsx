import RenterPic from '../../assets/rent-profile-pic.png'
import StarFill from '../../assets/icons/star-fill-icn.png'
import StarNoFill from '../../assets/icons/star-nofill-icn.png'


const ListingReviewBox = () => {
  return (
    <div className='border border-[#EEEEEE] rounded-[16px] p-[10px] max-w-[252px] max-sm:max-w-[100%]'>
      <div className="flex items-center gap-[8px]">
      <img className='w-[48px] h-[48px] object-cover' src={RenterPic} alt="" />
      <div className="">
        <p className=' font-semibold'>Xander K</p>
        <span className='text-[14px] text-[#959595]'>June 2024</span>
      </div>
      </div>
      <div className="star-rating flex gap-[4px] my-[10px]">
      <img src={StarFill} alt="" />
      <img src={StarFill} alt="" />
      <img src={StarFill} alt="" />
      <img src={StarNoFill} alt="" />
      <img src={StarNoFill} alt="" />

      </div>
      <p className='text-[14px]'>The host was friendly, and their garage was clean and safe.</p>
    </div>
  )
}

export default ListingReviewBox
