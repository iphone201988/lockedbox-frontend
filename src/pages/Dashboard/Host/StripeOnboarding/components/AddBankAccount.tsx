import { useEffect, useState } from "react";
import { useStripe } from "@stripe/react-stripe-js";
import { toast } from "react-toastify";
import { useAttachBankAccountMutation } from "../../../../../redux/api";
import Loader from "../../../../../components/Loader";
import { useNavigate } from "react-router-dom";
import { handleError } from "../../../../../utils/helper";

const AddBankAccount = () => {
  const stripe = useStripe();
  const navigate = useNavigate();
  const [attachBankAccount, { data, isLoading }] =
    useAttachBankAccountMutation();

  const [bankDetails, setBankDetails] = useState({
    country: "US",
    currency: "usd",
    routingNumber: "",
    accountNumber: "",
    accountHolderName: "",
    accountHolderType: "individual",
  });
  // const [token, setToken] = useState<any>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setBankDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!stripe) {
      toast.error("Something went wrong!");
      return;
    }

    try {
      const { token: bankToken, error: tokenError } = await stripe.createToken(
        "bank_account",
        {
          country: bankDetails.country,
          currency: bankDetails.currency,
          routing_number: bankDetails.routingNumber,
          account_number: bankDetails.accountNumber,
          account_holder_name: bankDetails.accountHolderName,
          account_holder_type: bankDetails.accountHolderType,
        }
      );

      if (tokenError) {
        throw tokenError;
      }

      // setToken(bankToken.id);
      console.log("Bank Token:", bankToken);

      await attachBankAccount({ bankToken: bankToken.id })
        .unwrap()
        .catch((error: any) => handleError(error, navigate));
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (data?.success) {
      console.log("Bank account attached successfully:", data);
      navigate("/dashboard/account/profile", { replace: true });
    }
  }, [data]);

  return (
    <form
      className="w-full flex flex-col justify-center items-center"
      onSubmit={handleSubmit}
    >
      {isLoading && <Loader />}
      <div className="border border-[#eeeeee] p-[20px] rounded-[16px] max-w-[520px] w-full flex flex-col gap-[16px]">
        {/* Routing and Account Numbers in a row */}
        <div className="flex gap-[16px] max-md:flex-col">
          <label className="flex flex-col gap-[4px] w-full">
            Routing Number
            <input
              className="border border-[#EEEEEE] py-4 px-4 w-full rounded-2xl"
              type="text"
              name="routingNumber"
              value={bankDetails.routingNumber}
              onChange={handleChange}
              required
              placeholder="110000000"
            />
            <span className="text-xs text-gray-500 mt-1">Test: 110000000</span>
          </label>

          <label className="flex flex-col gap-[4px] w-full">
            Account Number
            <input
              className="border border-[#EEEEEE] py-4 px-4 w-full rounded-2xl"
              type="text"
              name="accountNumber"
              value={bankDetails.accountNumber}
              onChange={handleChange}
              required
              placeholder="000123456789"
            />
            <span className="text-xs text-gray-500 mt-1">
              Test: 000123456789
            </span>
          </label>
        </div>

        {/* Account Holder Name */}
        <label className="flex flex-col gap-[4px]">
          Account Holder Name
          <input
            className="border border-[#EEEEEE] py-4 px-4 w-full rounded-2xl"
            type="text"
            name="accountHolderName"
            value={bankDetails.accountHolderName}
            onChange={handleChange}
            required
            placeholder="John Doe"
          />
        </label>

        {/* Account Type */}
        <label className="flex flex-col gap-[4px]">
          Account Type
          <div className="relative">
            <select
              className="border border-[#EEEEEE] py-4 px-4 w-full rounded-2xl appearance-none cursor-pointer"
              name="accountHolderType"
              value={bankDetails.accountHolderType}
              onChange={handleChange}
              required
            >
              <option value="individual">Individual</option>
              <option value="company">Company</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </label>

        {/* Submit Button */}
        <button
          className="bg-[#235370] py-3 px-4 rounded-[12px] text-white cursor-pointer hover:bg-[#1a3f57] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
          disabled={loading}
        >
          {loading ? "Processing..." : "Attach bank account"}
        </button>

        {/* Error Message */}
        {error && (
          <div className="text-red-500 p-3 bg-red-50 rounded-lg">
            Error: {error}
          </div>
        )}

        {/* Token Information */}
        {/* {token && (
          <div className="mt-4 p-4 bg-green-50 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Token Created:</h3>
            <p className="mb-1">
              <span className="font-semibold">Token ID:</span> {token.id}
            </p>
            <p className="mb-1">
              <span className="font-semibold">Bank:</span> {token.bank_name}
            </p>
            <p>
              <span className="font-semibold">Last 4:</span>{" "}
              {token.bank_account.last4}
            </p>
          </div>
        )} */}
      </div>
    </form>
  );
};

export default AddBankAccount;
