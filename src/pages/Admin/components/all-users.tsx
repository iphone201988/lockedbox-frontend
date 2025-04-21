import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLazyGetAllUsersQuery } from "../../../redux/api/admin";
import { usePagination } from "../../../hooks/usePagination";
import Loader from "../../../components/Loader";
import { getUrl } from "../../../utils/helper";
import NoUser from "../../../assets/icons/if-no-user.png";

const AllUsers = () => {
  const [users, setUsers] = useState<any>([]);
  const [getAllUsers, { data, isLoading, isFetching }] =
    useLazyGetAllUsersQuery();

  const { pagination, setPagnation, scrollableRef, handleScroll } =
    usePagination({
      scrollDown: false,
      fetchData: () => {
        getAllUsers(pagination.page);
      },
    });

  useEffect(() => {
    getAllUsers(pagination.page);
  }, []);

  useEffect(() => {
    if (data?.success) {
      const { users, pagination } = data;
      setUsers((prev: any) => [...prev, ...users]);

      setPagnation((prev: any) => ({
        ...prev,
        totalPages: pagination.totalPages,
      }));
    }
  }, [data]);

  if (isLoading) return <Loader />;

  return (
    <div className="">
      <h1 className="text-[26px] text-[#235370] font-semibold">All Users</h1>
      {isFetching && <Loader />}
      <div
        className="overflow-auto max-h-[500px] min-h-[600px] h-[600px]"
        ref={scrollableRef}
        onScroll={!isLoading && !isFetching ? handleScroll : () => {}}
      >
        <div className="relative">
          <table className="mt-[24px] w-full table-auto border-collapse bg-white border border-[#EEEEEE]">
            <thead className="bg-[#EEEEEE]">
              <tr>
                <th className="w-[5%] text-left px-4 py-4 font-semibold text-[#235370]">
                  No.
                </th>
                <th className="w-[15%] text-left px-4 py-4 font-semibold text-[#235370]">
                  Image
                </th>
                <th className="w-[50%] text-left px-4 py-4 font-semibold text-[#235370]">
                  User Name
                </th>
                <th className="w-[30%] text-right px-4 py-4 font-semibold text-[#235370]">
                  More Details
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user: any, index: number) => (
                <tr className="border-t border-[#EEEEEE]" key={index}>
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">
                    <img
                      className="w-[42px] h-[42px] object-cover rounded-full"
                      src={
                        user.profileImage ? getUrl(user.profileImage) : NoUser
                      }
                      alt=""
                    />
                  </td>
                  <td className="px-4 py-2">
                    {user.firstName ? user.firstName + user.lastName : ""}
                  </td>
                  <td className="px-4 py-2 text-[#235370] font-semibold underline text-right cursor-pointer">
                    <Link to={`/admin/user/account/${user._id}`}>
                      View details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
