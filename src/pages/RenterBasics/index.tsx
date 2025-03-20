import {  useState } from "react";
import BreadCrumbs from "../../components/BreadCrumb";
import ProfileNavbar from "../../components/ProfileNavbar";
import { RenterBasicsContent } from "../../constants";

const RenterBasics = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [filteredBasics, setFilteredBasics] = useState(RenterBasicsContent);

  const handleSearch = () => {
    const filteredBasics = RenterBasicsContent.filter(
      (data) =>
        data.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        data.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBasics(filteredBasics);
  };

  return (
    <div>
      <ProfileNavbar />
      <div className="px-[40px] max-lg:px-[20px] max-w-[1180px] mx-auto py-[24px]">
        <BreadCrumbs
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearch={handleSearch}
        />

        <div className="pt-[24px]">
          <h4 className="text-[36px] font-semibold max-lg:text-[28px]">
            Renter basics
          </h4>

          {filteredBasics.map((data) => (
            <>
              <p className="text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
                {data.question}
              </p>
              <p className="text-[16px] text-[#7A7A7A]">{data.answer}</p>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RenterBasics;
