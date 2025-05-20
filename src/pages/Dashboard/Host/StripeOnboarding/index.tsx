const StripeOnboaridng = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="border border-[#eeeeee] p-[20px] rounded-[16px] max-w-[520px] w-full flex flex-col gap-[16px] ">
        <div className="flex gap-[16px]">
          <label className="flex flex-col gap-[4px] w-full" htmlFor="">
            First Name
            <input
              className="border border-[#eeeeee] py-[12px] px-[16px] rounded-[12px]"
              type="text"
              placeholder="First name"
            />
          </label>
          <label className="flex flex-col gap-[4px] w-full" htmlFor="">
            Last Name
            <input
              className="border border-[#eeeeee] py-[12px] px-[16px] rounded-[12px]"
              type="text"
              placeholder="Last name"
            />
          </label>
        </div>
        <div className="border border-[#eeeeee] py-[12px] px-[16px] rounded-[12px] flex flex-col justify-center items-center h-[120px]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 3C12.1498 3.00009 12.2977 3.03384 12.4327 3.09875C12.5677 3.16365 12.6864 3.25806 12.78 3.375L16.78 8.375C16.867 8.47687 16.9326 8.59517 16.973 8.72289C17.0134 8.8506 17.0277 8.98513 17.0151 9.11849C17.0025 9.25184 16.9632 9.38131 16.8996 9.49919C16.836 9.61708 16.7494 9.72099 16.6448 9.80475C16.5403 9.88851 16.42 9.95041 16.2911 9.98679C16.1622 10.0232 16.0273 10.0333 15.8944 10.0165C15.7615 9.99974 15.6333 9.95644 15.5174 9.88919C15.4016 9.82194 15.3005 9.7321 15.22 9.625L13 6.85V14C13 14.2652 12.8946 14.5196 12.7071 14.7071C12.5196 14.8946 12.2652 15 12 15C11.7348 15 11.4804 14.8946 11.2929 14.7071C11.1054 14.5196 11 14.2652 11 14V6.85L8.78 9.626C8.69954 9.7331 8.59839 9.82294 8.48255 9.89019C8.36671 9.95744 8.23853 10.0007 8.10564 10.0175C7.97274 10.0343 7.83783 10.0242 7.70891 9.98779C7.58 9.95141 7.4597 9.88951 7.35517 9.80575C7.25064 9.72199 7.164 9.61808 7.1004 9.50019C7.03679 9.38231 6.99752 9.25284 6.98491 9.11949C6.97231 8.98613 6.98662 8.8516 7.027 8.72389C7.06739 8.59617 7.13302 8.47787 7.22 8.376L11.22 3.376C11.3135 3.25888 11.4322 3.16428 11.5672 3.0992C11.7022 3.03412 11.8501 3.00021 12 3ZM9 14V13H5C4.46957 13 3.96086 13.2107 3.58579 13.5858C3.21071 13.9609 3 14.4696 3 15V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V15C21 14.4696 20.7893 13.9609 20.4142 13.5858C20.0391 13.2107 19.5304 13 19 13H15V14C15 14.7956 14.6839 15.5587 14.1213 16.1213C13.5587 16.6839 12.7956 17 12 17C11.2044 17 10.4413 16.6839 9.87868 16.1213C9.31607 15.5587 9 14.7956 9 14ZM17 16C16.7348 16 16.4804 16.1054 16.2929 16.2929C16.1054 16.4804 16 16.7348 16 17C16 17.2652 16.1054 17.5196 16.2929 17.7071C16.4804 17.8946 16.7348 18 17 18H17.01C17.2752 18 17.5296 17.8946 17.7171 17.7071C17.9046 17.5196 18.01 17.2652 18.01 17C18.01 16.7348 17.9046 16.4804 17.7171 16.2929C17.5296 16.1054 17.2752 16 17.01 16H17Z"
              fill="black"
            />
          </svg>
          <button className=" cursor-pointer">upload document</button>
        </div>
        <label className="flex flex-col gap-[4px]" htmlFor="">
          Date of Birth
          <input
            className="border border-[#eeeeee] py-[12px] px-[16px] rounded-[12px]"
            type="text"
            placeholder="MM/DD/YYYY"
          />
        </label>
        <label className="flex flex-col gap-[4px]" htmlFor="">
          Business type
          <select
            className="border border-[#eeeeee] py-[12px] px-[16px] rounded-[12px]"
            name=""
            id=""
          >
            <option value="">Work</option>
            <option value="">Work</option>
            <option value="">Work</option>
          </select>
        </label>
        <label className="flex flex-col gap-[4px]" htmlFor="">
          Phone Number
          <input
            className="border border-[#eeeeee] py-[12px] px-[16px] rounded-[12px]"
            type="text"
            placeholder="Phone number"
          />
        </label>
        <button className="bg-[#008cdd] py-[12px] px-[16px] rounded-[12px] text-white cursor-pointer">
          Submit
        </button>
      </div>
    </div>
  );
};

export default StripeOnboaridng;
