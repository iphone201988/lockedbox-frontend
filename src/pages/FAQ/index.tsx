import { useState } from "react";
import BreadCrumbs from "../../components/BreadCrumb";
import ProfileNavbar from "../../components/ProfileNavbar";
import { RenterFAQS, HostFAQS } from "../../constants";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const [filteredRenterFaqs, setFilteredRenterFaqs] = useState(RenterFAQS);
  const [filteredHostFaqs, setFilteredHostFaqs] = useState(HostFAQS);

  const handleSearch = () => {
    const filteredRenterFaqs = RenterFAQS.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const filteredHostFaqs = HostFAQS.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRenterFaqs(filteredRenterFaqs);
    setFilteredHostFaqs(filteredHostFaqs);
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
          <h5 className="text-[30px] font-bold max-lg:text-[22px] mt-5">
            Renters
          </h5>

          {/* FAQ Content */}
          <div className="mt-6">
            {filteredRenterFaqs.length === 0 ? (
              <p className="text-center text-[#7A7A7A] mt-8">
                No results found for "{searchTerm}"
              </p>
            ) : (
              filteredRenterFaqs.map((faq, index) => (
                <div key={index}>
                  <p className="text-[20px] max-lg:text-[18px] font-semibold mt-[24px] mb-[10px]">
                    {faq.question}
                  </p>
                  <p className="text-[16px] text-[#7A7A7A] whitespace-pre-line">
                    {faq.answer}
                  </p>
                </div>
              ))
            )}
          </div>
          <h5 className="text-[30px] font-bold max-lg:text-[22px] mt-5">
            Hosts
          </h5>

          {/* FAQ Content */}
          <div className="mt-6">
            {filteredHostFaqs.length === 0 ? (
              <p className="text-center text-[#7A7A7A] mt-8">
                No results found for "{searchTerm}"
              </p>
            ) : (
              filteredHostFaqs.map((faq, index) => (
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
