import UsrPic from '../../../../assets/host-profile-pic.png'

const AdminAllUser = () => {
  return (
    <div className="">
      <h1 className="text-[26px] text-[#235370] font-semibold">All Users</h1>
      <div className=" overflow-x-auto">
       

<div className="relative max-w-[560px] min-w-[560px]">
    <table className="mt-[24px] w-full table-auto border-collapse bg-white border border-[#EEEEEE] ">
                <thead className="bg-[#EEEEEE]">
                    <tr>
                        <th className="w-[5%] text-left px-4 py-4 font-semibold text-[#235370]">No.</th>
                        <th className="w-[15%] text-left px-4 py-4 font-semibold text-[#235370]">pic</th>
                        <th className="w-[50%] text-left px-4 py-4 font-semibold text-[#235370]">User Name</th>
                        <th className="w-[30%] text-right px-4 py-4 font-semibold text-[#235370]">More Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-t border-[#EEEEEE]">
                        <td className="px-4 py-2">01</td>
                        <td className="px-4 py-2"><img className='w-[42px] h-[42px] object-cover' src={UsrPic} alt="" /></td>
                        <td className="px-4 py-2">Garry Smith</td>
                        <td className="px-4 py-2 text-[#235370] font-semibold underline text-right cursor-pointer">View details</td>
                    </tr>
                    <tr className="border-t border-[#EEEEEE]">
                    <td className="px-4 py-2">02</td>
                    <td className="px-4 py-2"><img className='w-[42px] h-[42px] object-cover' src={UsrPic} alt="" /></td>
                        <td className="px-4 py-2">Xander Kerry</td>
                        <td className="px-4 py-2 text-[#235370] font-semibold underline text-right cursor-pointer">View details</td>
                    </tr>

                </tbody>
            </table>
</div>

      </div>
    </div>
  );
};

export default AdminAllUser;
