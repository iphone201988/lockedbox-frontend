import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      className="btn-pri with-icn absolute left-[24px] top-[24px] max-md:relative max-md:left-0 max-md:top-0"
      onClick={() => navigate(-1)}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.00006 10L3.29306 10.707L2.58606 10L3.29306 9.293L4.00006 10ZM21.0001 18C21.0001 18.2652 20.8947 18.5196 20.7072 18.7071C20.5196 18.8946 20.2653 19 20.0001 19C19.7348 19 19.4805 18.8946 19.293 18.7071C19.1054 18.5196 19.0001 18.2652 19.0001 18H21.0001ZM8.29306 15.707L3.29306 10.707L4.70706 9.293L9.70706 14.293L8.29306 15.707ZM3.29306 9.293L8.29306 4.293L9.70706 5.707L4.70706 10.707L3.29306 9.293ZM4.00006 9H14.0001V11H4.00006V9ZM21.0001 16V18H19.0001V16H21.0001ZM14.0001 9C15.8566 9 17.6371 9.7375 18.9498 11.0503C20.2626 12.363 21.0001 14.1435 21.0001 16H19.0001C19.0001 14.6739 18.4733 13.4021 17.5356 12.4645C16.5979 11.5268 15.3261 11 14.0001 11V9Z"
          fill="white"
        />
      </svg>
      Back
    </button>
  );
};

export default BackButton;
