import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <>
      <div className="fixed inset-0 z-10 bg-white opacity-70"></div>
      <div className="absolute left-[50%] top-[50%] z-20">
        {/* Loader with white blurred background */}
        {/* <div className="absolute left-[50%] top-[50%] z-20"></div> */}
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          strokeColor="#235370"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
        />
      </div>
    </>
  );
};

export default Loader;
