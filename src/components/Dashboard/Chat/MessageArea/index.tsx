import { useEffect, useRef, useState } from "react";
import NoUser from "../../../../assets/icons/if-no-user.png";

import AttachIcon from "../../../../assets/icons/add-image.png";
import SendIcon from "../../../../assets/icons/send-icn.png";
import IncomingMessage from "../Message/incoming-message";
import OutgoingMessage from "../Message/outging-message";
import { Navigate, useParams } from "react-router-dom";
import {
  useGetUserQuery,
  useLazyFindMessagesQuery,
} from "../../../../redux/api";
import Loader from "../../../Loader";
import moment from "moment";
import { getUrl, groupedData } from "../../../../utils/helper";
import { useChatSocket } from "../../../../hooks/useChatSocket";
import { usePagination } from "../../../../hooks/usePagination";
import { toast } from "react-toastify";

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
  const [findMessages, { data, isLoading, isFetching }] =
    useLazyFindMessagesQuery();
  const [conversation, setConversation] = useState<any>([]);
  const [listingDetails, setListingDetails] = useState<ListingDetail>();
  const [receiverId, setReceiverId] = useState();

  const {
    pagination,
    setPagnation,
    scrollableRef,
    handleScroll,
    restoreScrollPosition,
  } = usePagination({
    scrollDown: true,
    fetchData: () => {
      findMessages({ conversationId: id, page: pagination.page });
    },
  });
  
  const messageEndRef = useRef<HTMLDivElement>(null);
  const uploadImageRef = useRef<any>(null);

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

  const appendMessages = (data: any) => {
    if (pagination.page === 1) {
      setConversation(data);
    } else {
      // setConversation((prevConversation: any) => {
      //   const mergedConversation = { ...prevConversation };
      //   Object.entries(data).forEach(([key, messages]: [any, any]) => {
      //     if (mergedConversation[key]) {
      //       mergedConversation[key] = [...messages, ...mergedConversation[key]];
      //     } else {
      //       mergedConversation[key] = messages;
      //     }
      //   });
      //   return mergedConversation;
      // });

      setConversation((prevConversation: any) => {
        // Get keys from new data
        const newKeys = Object.keys(data);
        // Get keys from previous conversation that are not in the new data
        const oldKeys = Object.keys(prevConversation).filter(
          (key) => !newKeys.includes(key)
        );
        // Build a new conversation object with new keys first
        const newConversation: any = {};

        // Insert new keys (or merge if key already exists)
        newKeys.forEach((key) => {
          if (prevConversation[key]) {
            // Merge: new messages come before existing ones
            newConversation[key] = [...data[key], ...prevConversation[key]];
          } else {
            newConversation[key] = data[key];
          }
        });

        // Append any keys that were already present but not in the new data
        oldKeys.forEach((key) => {
          newConversation[key] = prevConversation[key];
        });

        return newConversation;
      });
    }
  };

  const { sendMessage } = useChatSocket(
    userData?.userExists._id,
    appendSingleMessage
  );

  useEffect(() => {
    // Reset pagination and conversation when the id changes
    setPagnation({ page: 1, totalPages: 1 });
    setConversation({});

    findMessages({ conversationId: id, page: 1 });
  }, [id]);

  useEffect(() => {
    if (data?.success) {
      const { listingId: listing } = data?.conversation.bookingId;
      let { startDate, endDate } = data?.conversation.bookingId;
      const { pagination } = data;
      startDate = moment(startDate).format("MMM DD YYYY");
      endDate = moment(endDate).format("MMM DD YYYY");

      appendMessages(groupedData(data?.conversationMessages));

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

      setPagnation((prev: any) => ({
        ...prev,
        totalPages: pagination.totalPages,
      }));
    }
  }, [data]);

  useEffect(() => {
    if (pagination.page === 1) {
      messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    restoreScrollPosition();
  }, [conversation]);

  const handleFileUpload = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      // Validate that the file is an image
      if (!file.type.startsWith('image/')) {
        toast.error('Please select an image file.');
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result;
        const data = {
          conversationId: id,
          content: base64String,
          receiver: receiverId,
          contentType: "image",
        };
        sendMessage(JSON.stringify(data));
        appendSingleMessage("today", {
          content: base64String,
          senderDetails: { _id: userData.userExists._id },
          contentType: "image",
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSendMessage = (e: any) => {
    e.preventDefault();
    const data = {
      conversationId: id,
      content: message,
      receiver: receiverId,
      contentType: "text",
    };

    sendMessage(JSON.stringify(data));
    setMessage(null);
    appendSingleMessage("today", {
      content: message,
      senderDetails: { _id: userData.userExists._id },
    });
  };

  return (
    <div className="flex flex-col h-full">
      {(isLoading || isFetching) && <Loader />}
      {listingDetails && (
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
      )}

      <div
        className="py-[24px] px-[30px] h-full overflow-auto no-scrollbar max-lg:px-[20px]"
        ref={scrollableRef}
        onScroll={!isLoading && !isFetching ? handleScroll : () => {}}
      >
        {Object.keys(conversation).length ? (
          Object.keys(conversation).map((key, index) => {
            return (
              <div key={index}>
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
                      let url = null;
                      if (message.senderDetails?.profileImage) {
                        url = getUrl(message.senderDetails?.profileImage);
                      }
                      return (
                        <IncomingMessage
                          message={message.content}
                          image={url ?? NoUser}
                          bookingId={message.bookingId?._id}
                          status={message.bookingId?.status}
                        />
                      );
                    }
                  })}
                </div>
              </div>
            );
          })
        ) : (
          <></>
        )}
        <div ref={messageEndRef} />
      </div>

      <div className="px-[30px] mt-auto pb-[24px] pt-[16px] bg-white max-lg:px-[20px] max-md:pb-[16px]">
        <div className=" border border-[#EEEEEE] rounded-[8px] p-[6px] flex items-center ">
          <button className=" cursor-pointer pr-[24px] pl-[10px]">
            <img
              src={AttachIcon}
              alt="add-image"
              onClick={() => {
                if (uploadImageRef?.current) uploadImageRef.current.click();
              }}
            />
            <input
              type="file"
              className="hidden"
              ref={uploadImageRef}
              accept="image/*"
              onChange={handleFileUpload}
            />
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
