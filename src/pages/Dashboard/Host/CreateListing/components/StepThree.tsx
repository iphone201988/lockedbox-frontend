const StepThree = () => {
  return (
    <div className='flex flex-col'>
       {/* --- */}
       <div className="flex border-b border-[#EEEEEE] py-[24px] max-md:flex-col max-md:gap-[20px]">
        <div className="max-w-[380px] w-full max-md:max-w-full">
          <p className="text-[18px] text-[#235370] font-semibold">
          Create a tagline for your listing
          </p>
        </div>
        <div className=" max-w-[460px] w-full max-md:max-w-full">
          <div className="">
            <p>We request all hosts complete an identity  verification through Stripe to build trust and  ensure security within the community. This  step reassures renters that their belongings  are stored with a credible and accountable  individual.</p>
          </div>
          <button className='btn-pri mr-auto mt-[16px]'>Verify</button>
        </div>
      </div>
     
    </div>
  )
}

export default StepThree
