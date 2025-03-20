import { useState } from "react";
import BreadCrumbs from "../../components/BreadCrumb";
import ProfileNavbar from "../../components/ProfileNavbar";
import { FAQS } from "../../constants";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [filteredFaqs, setFilteredFaqs] = useState(FAQS);

  const handleSearch = () => {
    const filteredFaqs = FAQS.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredFaqs(filteredFaqs);
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
            Frequently Asked Questions
          </h4>

          {/* FAQ Content */}
          <div className="mt-6">
            {filteredFaqs.length === 0 ? (
              <p className="text-center text-[#7A7A7A] mt-8">
                No results found for "{searchTerm}"
              </p>
            ) : (
              filteredFaqs.map((faq, index) => (
                <div key={index}>
                  <p className="text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
                    {faq.question}
                  </p>
                  <p className="text-[16px] text-[#7A7A7A]">{faq.answer}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
