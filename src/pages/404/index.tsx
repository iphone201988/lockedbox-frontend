import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex justify-center items-center h-[100vh]">
      <div className="flex justify-center items-center flex-col">
        <h1 className=" font-bold text-center text-[80px] text-[#235370] max-md:text-[60px]">
          404 error
        </h1>
        <p className="text-[56px] text-[#959595] font-semibold text-center mt-[20px] max-md:text-[36px]">
          Looks like you're lost
        </p>
        <p className="mb-[40px] text-[#235370] mt-[8px] text-[20px]">
          The page you are looking for not available!
        </p>
        <Link className="btn-pri" to="/">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
