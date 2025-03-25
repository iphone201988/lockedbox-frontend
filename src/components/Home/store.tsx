import { useNavigate } from "react-router-dom";
import StoreImg from "../../assets/store-img.png";
import { allowedStorage } from "../../constants";

const Store = () => {
  const navigate = useNavigate();
  const handleSearchProperties = (item: string) => {
    navigate("/search-results", { state: { item } });
  };

  return (
    <div className="py-[60px] border-b border-[#EEEEEE] max-lg:py-[40px]">
      <div className="max-w-[1440px] px-[40px] mx-auto flex justify-between gap-[20px] max-lg:px-[20px] max-lg:flex-col-reverse">
        <div className="left">
          <h2 className="text-[36px] font-bold max-lg:text-[26px]">
            What would you like to <span className="text-[#235370]">Store</span>
            ?
          </h2>
          <div className=" grid grid-cols-[200px_minmax(200px,_1fr)] gap-[16px] mt-[20px] mb-[16px] max-lg:grid-cols-3 max-md:grid-cols-2">
            {allowedStorage.map((item, index: number) => (
              <button
                key={index}
                className="store-hover border border-[#EEEEEE] rounded-2xl max-w-[200px] flex items-center justify-center p-[30px] max-lg:w-full max-lg:max-w-full"
                onClick={() => handleSearchProperties(item.name)}
              >
                {item.homePageIcon}
              </button>
            ))}
          </div>
          <p className="max-w-[340px]">
            Search from certified storage hosts nearby that will safeguard your
            items.
          </p>
        </div>
        <div className="right relative">
          <img className="rounded-4xl max-lg:w-full" src={StoreImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Store;
