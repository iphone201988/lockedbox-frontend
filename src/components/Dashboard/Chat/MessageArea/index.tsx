import { useEffect, useState } from "react";
import NoUser from "../../../../assets/icons/if-no-user.png";

import AttachIcon from "../../../../assets/icons/attach-icn.png";
import SendIcon from "../../../../assets/icons/send-icn.png";
import IncomingMessage from "../Message/incoming-message";
import OutgoingMessage from "../Message/outging-message";
import { Navigate, useParams } from "react-router-dom";
import { useFindMessagesQuery, useGetUserQuery } from "../../../../redux/api";
import Loader from "../../../Loader";
import moment from "moment";
import { getUrl, groupedData } from "../../../../utils/helper";
import { useChatSocket } from "../../../../hooks/useChatSocket";

type ListingDetail = {
  image: string;
  spaceType: string;
  city: string;
  startDate: string;
  endDate: string;
};

const MessageArea = () => {
  const [message, setMessage] = useState<string | null>();
  const { id } = useParams();
  if (!id) return <Navigate to="/" />;

  const { data: userData } = useGetUserQuery();
  const { data, isLoading, isFetching } = useFindMessagesQuery(id);
  const [conversation, setConversation] = useState<any>([]);
  const [listingDetails, setListingDetails] = useState<ListingDetail>();
  const [receiverId, setReceiverId] = useState();

  const appendSingleMessage = (key: string, message: any) => {
    setConversation((prev: any) => {
      if (prev[key]) {
        return {
          ...prev,
          [key]: [...prev[key], message],
        };
      } else {
        return {
          ...prev,
          [key]: [message],
        };
      }
    });
  };

  const { sendMessage } = useChatSocket(appendSingleMessage);

  useEffect(() => {
    if (data?.success) {
      const { listingId: listing } = data?.conversation.bookingId;
      let { startDate, endDate } = data?.conversation.bookingId;
      startDate = moment(startDate).format("MMM DD YYYY");
      endDate = moment(endDate).format("MMM DD YYYY");

      setConversation(groupedData(data?.conversationMessages));

      setListingDetails({
        image: listing.storageImages[0],
        spaceType: listing.spaceType,
        city: listing.city,
        startDate,
        endDate,
      });
      setReceiverId(
        data.conversation.participants.find(
          (id: any) => id.toString() != userData.userExists._id
        )
      );
    }
  }, [data]);

  const handleSendMessage = (e: any) => {
    e.preventDefault();
    const data = {
      conversationId: id,
      content: message,
      receiver: receiverId,
      contentType: "text",
    };

    console.log("data::::", data);
    sendMessage(JSON.stringify(data));
    setMessage(null);
    // appendSingleMessage("today", {
    //   content: message,
    //   senderDetails: { _id: userData.userExists._id },
    // });

    // if ("today" in conversation) {
    //   setConversation((prev: any) => ({
    //     ...prev,
    //     today: [
    //       ...prev.today,
    //       { content: message, senderDetails: { _id: userData.userExists._id } },
    //     ],
    //   }));
    // } else {
    //   setConversation((prev: any) => ({
    //     ...prev,
    //     today: [
    //       { content: message, senderDetails: { _id: userData.userExists._id } },
    //     ],
    //   }));
    // }
  };

  return (
    <div className="flex flex-col h-full">
      {(isLoading || isFetching) && <Loader />}
      <div className="px-[30px] py-[24px]  border-b border-[#EEEEEE] flex gap-[10px] items-center max-lg:px-[20px] max-md:py-[10px]">
        <img
          className="w-[60px] h-[60px] object-cover rounded-[10px]"
          src={getUrl(listingDetails?.image!)}
          alt=""
        />
        <div className="">
          <p className="text-[18px] font-semibold">
            {listingDetails?.spaceType} for storage in {listingDetails?.city}
          </p>
          <p className="text-[#959595]">
            <span className="text-[#000000] font-semibold">From: </span>
            {listingDetails?.startDate} - {listingDetails?.endDate}
          </p>
        </div>
      </div>

      <div className="py-[24px] px-[30px] h-full overflow-auto no-scrollbar max-lg:px-[20px]">
        {Object.keys(conversation).length ? (
          Object.keys(conversation).map((key) => {
            return (
              <>
                <div className="text-center">
                  <span className=" inline-block text-[14px] px-[10px] py-[4px] border border-[#EEEEEE] rounded-[4px] text-[#959595] mx-auto capitalize">
                    {key}
                  </span>
                </div>
                <div className="mt-[24px]">
                  {conversation[key].map((message: any) => {
                    if (message.senderDetails._id == userData.userExists._id) {
                      return <OutgoingMessage message={message.content} />;
                    } else {
                      return (
                        <IncomingMessage
                          message={message.content}
                          image={message.senderDetails?.profileImage ?? NoUser}
                        />
                      );
                    }
                  })}
                </div>
              </>
            );
          })
        ) : (
          <></>
        )}
      </div>

      <div className="px-[30px] mt-auto pb-[24px] pt-[16px] bg-white max-lg:px-[20px] max-md:pb-[16px]">
        <div className=" border border-[#EEEEEE] rounded-[8px] p-[6px] flex items-center ">
          <button className=" cursor-pointer pr-[24px] pl-[10px]">
            <img src={AttachIcon} alt="" />
          </button>
          <form className="flex w-full" onSubmit={handleSendMessage}>
            <input
              className=" w-full !outline-none"
              type="text"
              placeholder="Write a response"
              value={message ?? ""}
              onChange={(e: any) => setMessage(e.target.value)}
            />
            <button
              type="submit"
              className="p-[10px] rounded-[4px] bg-[#235370] hover:bg-[#000000] cursor-pointer"
              disabled={!message}
            >
              <img src={SendIcon} alt="" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MessageArea;
