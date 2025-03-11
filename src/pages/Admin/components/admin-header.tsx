import { useState, useEffect } from "react";
import NoUser from "../../../assets/icons/if-no-user.png";
import SearchIcon from "../../../assets/icons/search-icn.png";
import Loader from "../../../components/Loader";
import { useLazySearchUserQuery } from "../../../redux/api/admin";
import { toast } from "react-toastify";
import { getUrl, handleError } from "../../../utils/helper";
import { useNavigate } from "react-router-dom";

const AdminHeader = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchUser, { data, isLoading, isFetching }] =
    useLazySearchUserQuery();
  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   if (searchQuery.length >= 3) {
  //     const delayDebounce = setTimeout(() => {
  //       searchUser(searchQuery);
  //     }, 500);

  //     return () => clearTimeout(delayDebounce);
  //   }
  // }, [searchQuery, searchUser]);

  const handleSearch = async () => {
    if (searchQuery.length < 3) {
      toast.warning("Please search with atleast 3 characters");
      return;
    }

    await searchUser(searchQuery)
      .unwrap()
      .catch((error: any) => handleError(error, navigate));
  };

  useEffect(() => {
    if (data?.success) {
      setUsers(data.users);
    }
  }, [data]);

  return (
    <div className="px-[30px] py-[20px] border-b border-[#EEEEEE] bg-white flex items-center justify-between max-lg:p-[20px] max-md:flex-col max-md:gap-[16px]">
      {(isLoading || isFetching) && <Loader />}
      <h2 className="text-[32px] text-[#235370] font-bold max-lg:text-[26px] text-nowrap">
        User Management
      </h2>
      <div className="flex items-center w-full">
        <div className="flex ml-auto w-[100%] justify-end gap-[12px] max-lg:mr-[12px] max-md:justify-start">
          <div className="flex justify-between border border-[#EEEEEE] rounded-[16px] px-[16px] py-[18px] max-w-[400px] w-full max-lg:max-w-[250px] relative">
            <input
              className="w-full outline-none"
              type="text"
              placeholder="Search User ID / Name / Phone"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <img src={SearchIcon} alt="" />

            {users.length ? (
              <div className="search-result flex flex-col gap-[8px] absolute bg-white border border-[#EEEEEE] rounded-[16px] p-[12px] w-full left-[0] top-[70px]">
                {users.map((user: any) => (
                  <div className="flex gap-[8px] items-center cursor-pointer">
                    <img
                      className="w-[36px] h-[36px] rounded-full"
                      src={
                        user.profileImage ? getUrl(user.profileImage) : NoUser
                      }
                      alt=""
                    />
                    <p className=" font-semibold">
                      {user.firstName} {user.lastName} ({user._id})
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <></>
            )}
          </div>
          <button className="btn-pri" onClick={handleSearch}>
            Search User
          </button>
        </div>
        <div className="hidden max-lg:block relative">
          <button className="cursor-pointer w-[48px] h-[48px] relative">
            <img src={NoUser} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
