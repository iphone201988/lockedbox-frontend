import { Outlet, useNavigate } from "react-router-dom";
import ChatProfile from "../../components/Dashboard/Chat/ChatProfile";
import {
  useGetUserQuery,
  useLazyFindConversationsQuery,
} from "../../redux/api";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import NoListing from "../../components/Dashboard/NoListing";
// import { useChatNotification } from "../../hooks/useChatNotification";
import moment from "moment-timezone";
import { usePagination } from "../../hooks/usePagination";

const ChatLayout = () => {
  const navigate = useNavigate();
  const { data: userData } = useGetUserQuery();
  // const { data, isLoading } = useFindConversationsQuery();
  const [findConversations, { data, isLoading, isFetching }] =
    useLazyFindConversationsQuery();
  const [chats, setChats] = useState<ChatProfileProps[]>([]);

  const {
    pagination,
    setPagnation,
    scrollableRef,
    handleScroll,
    // restoreScrollPosition,
  } = usePagination({
    scrollDown: false,
    fetchData: () => {
      findConversations(pagination.page);
    },
  });

  // const handleUpdateLatestMessages = (
  //   conversationId: string,
  //   lastMessage: string
  // ) => {
  //   if (conversationId == id) return;

  //   setChats((prev: ChatProfileProps[]) => {
  //     return prev.map((chat) =>
  //       chat.conversationId === conversationId
  //         ? { ...chat, totalUnread: chat.totalUnread + 1, lastMessage }
  //         : chat
  //     );
  //   });
  // };

  // useChatNotification(handleUpdateLatestMessages);

  useEffect(() => {
    findConversations(pagination.page);
  }, []);

  useEffect(() => {
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (data?.success && userData) {
      const { pagination } = data;
      const chats: ChatProfileProps[] = data.conversations.map(
        (conversation: any, index: number) => ({
          conversationId: conversation._id,
          lastMessage: conversation.lastMessage,
          lastMessageType: conversation.lastMessageType,
          totalUnread: index == 0 ? 0 : conversation.totalUnread,
          updatedAt: moment
            .utc(conversation.updatedAt)
            .tz(userTimezone)
            .format("h:mm A"),
          profile: conversation.participants.find((user: any) => {
            if (user._id != userData.userExists._id) {
              return {
                firstName: user.firstName,
                lastName: user.lastName,
                profileImage: user.profileImage,
              };
            }
          }),
        })
      );

      setPagnation((prev: any) => ({
        ...prev,
        totalPages: pagination.totalPages,
      }));

      setChats((prev) => [...prev, ...chats]);

      if (chats.length && pagination.page == 1) {
        navigate(`/dashboard/message/${chats[0].conversationId}`);
      }
    }
  }, [data]);
  if (isLoading) return <Loader />;
  return (
    <div className="h-full flex max-md:flex-col">
      {chats.length ? (
        <>
          <div
            className="pl-[30px] pr-[20px] py-[24px] max-w-[310px] min-w-[310px] border-r border-[#EEEEEE] h-full max-lg:px-[20px] max-md:max-w-full max-md:overflow-auto max-md:border-b overflow-auto"
            ref={scrollableRef}
            onScroll={!isLoading && !isFetching ? handleScroll : () => {}}
          >
            <div className="flex flex-col gap-[10px]">
              {chats.map((chat: ChatProfileProps, index: number) => (
                <ChatProfile key={index} chat={chat} setChats={setChats} />
              ))}
            </div>
          </div>
          <div className="w-full max-md:min-h-[500px] ">
            <Outlet />
          </div>
        </>
      ) : (
        <NoListing type="messages" />
      )}
    </div>
  );
};

export default ChatLayout;
