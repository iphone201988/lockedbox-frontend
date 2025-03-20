import { Link, useLocation } from "react-router-dom";

const BreadCrumbs = ({
  searchTerm,
  setSearchTerm,
  handleSearch
}: {
  searchTerm?: any;
  setSearchTerm?: any;
  handleSearch?: any;
}) => {
  const location = useLocation();
  const path: string = location.pathname;

  const breadcrumbMap: any = {
    "/faq": "FAQ",
    "/contact-us": "Contact Us",
    "/renter-basics": "Renter Basics",
  };

  return (
    <div className="flex justify-between items-center max-md:flex-col gap-[16px]">
      <div className="w-full">
        <p>
          Support /{" "}
          <Link className="text-[#235370]" to={path}>
            {breadcrumbMap[path]}
          </Link>
        </p>
      </div>
      <div className="flex gap-[12px] w-full justify-end max-md:justify-start">
        {path != "/contact-us" && (
          <>
            <input
              className="border border-[#EEEEEE] rounded-[16px] px-[16px] py-[20px] max-w-[400px] w-full"
              type="search"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn-pri" onClick={handleSearch}>Search</button>
          </>
        )}
      </div>
    </div>
  );
};

export default BreadCrumbs;
