import { useEffect, useState } from "react";
import Loader from "../../../../../components/Loader";
import {
  useGetBankAccountsQuery,
  useGetUserQuery,
  useLazyGetLoginLinkQuery,
} from "../../../../../redux/api";
import { useNavigate } from "react-router-dom";
import { handleError } from "../../../../../utils/helper";

const BankAccounts = () => {
  const navigate = useNavigate();
  const { data: userData } = useGetUserQuery();
  const isStripeAccountConnected =
    userData?.userExists?.isStripeAccountConnected;

  const { data, isLoading } = useGetBankAccountsQuery(undefined, {
    skip: !isStripeAccountConnected,
  });

  const [bankAccounts, setBankAccounts] = useState([]);
  const [
    getLoginLink,
    { data: linkData, isLoading: isGeneratingLink, isFetching },
  ] = useLazyGetLoginLinkQuery();

  const generateLoginLink = async () => {
    await getLoginLink()
      .unwrap()
      .catch((error: any) => handleError(error, navigate));
  };

  useEffect(() => {
    if (data?.success) {
      const { bankAccounts } = data;
      setBankAccounts(bankAccounts);
    }
  }, [data]);

  useEffect(() => {
    if (linkData?.success) {
      console.log("linkData:::", linkData);
      const { url } = linkData;

      if (url) {
        window.open(url, "_blank");
      }
    }
  }, [linkData]);

  if (isLoading) return <Loader />;
  return (
    <>
      {(isGeneratingLink || isFetching) && <Loader />}
      <div className="flex border-b border-[#EEEEEE] py-[24px] max-md:flex-col max-md:gap-[20px]">
        <div className="max-w-[380px] w-full max-md:max-w-full">
          <p className="text-[18px] text-[#235370] font-semibold">
            Bank account
          </p>
        </div>
        <div className="max-w-[100%] w-full">
          <div className=" max-w-[100%] w-full flex gap-[20px] flex-wrap">
            {bankAccounts.length ? (
              bankAccounts.map((account: any) => (
                <div className="flex gap-[4px] flex-col w-full max-w-[400px] border border-[#EEEEEE] p-[16px] rounded-[16px]">
                  <div className="flex justify-between">
                    <p>Bank Name</p>
                    <b>{account.bank_name}</b>
                  </div>
                  <div className="flex justify-between">
                    <p>Account Holder Name</p>
                    <b>{account.account_holder_name}</b>
                  </div>
                  <div className="flex justify-between">
                    <p>Account Number</p>
                    <b>XXXX XXXX XXXX {account.last4}</b>
                  </div>
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
          {isStripeAccountConnected ? (
            <button
              className="btn-pri mt-[24px] ml-auto"
              onClick={generateLoginLink}
            >
              Manage your accounts
            </button>
          ) : (
            <p className="text-lg font-bold text-red-600">
              Bank account not linked
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default BankAccounts;
