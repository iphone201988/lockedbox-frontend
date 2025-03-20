import { Outlet } from "react-router-dom";
import ChatProfile from "../../components/Dashboard/Chat/ChatProfile";
import { useFindConversationsQuery, useGetUserQuery } from "../../redux/api";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import NoListing from "../../components/Dashboard/NoListing";

const ChatLayout = () => {
  const { data: userData } = useGetUserQuery();
  const { data, isLoading } = useFindConversationsQuery();
  const [chats, setChats] = useState<ChatProfileProps[]>([]);

  useEffect(() => {
    if (data?.success && userData) {
      const chats: ChatProfileProps[] = data.conversations.map(
        (conversation: any) => ({
          conversationId: conversation._id,
          lastMessage: conversation.lastMessage,
          lastMessageType: conversation.lastMessageType,
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

      setChats(chats);
    }
  }, [data]);
  if (isLoading) return <Loader />;
  return (
    <div className="h-full flex max-md:flex-col">
      {chats.length ? (
        <>
          <div className="px-[30px] py-[24px] max-w-[310px] min-w-[310px] border-r border-[#EEEEEE] h-full max-lg:px-[20px] max-md:max-w-full max-md:overflow-auto max-md:border-b overflow-auto">
            <div className="flex flex-col gap-[10px]">
              {chats.map((chat: ChatProfileProps, index: number) => (
                <ChatProfile key={index} chat={chat} />
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
