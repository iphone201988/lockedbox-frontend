import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <>
      {/* Background overlay */}
      <div className="fixed inset-0 z-10 bg-white opacity-70"></div>

      {/* Centered Loader */}
      <div className="fixed inset-0 z-20 flex items-center justify-center">
        <RotatingLines
          visible={true}
          // @ts-ignore
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
