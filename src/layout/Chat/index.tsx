import { Outlet } from "react-router-dom";
import ChatProfile from "../../components/Dashboard/Chat/ChatProfile";
import { useFindConversationsQuery, useGetUserQuery } from "../../redux/api";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";

const ChatLayout = () => {
  const { data: userData } = useGetUserQuery();
  const { data, isLoading } = useFindConversationsQuery();
  const [chats, setChats] = useState<ChatProfileProps[]>([]);

  console.log("userData::::", userData);
  useEffect(() => {
    if (data?.success && userData) {
      const chats: ChatProfileProps[] = data.conversations.map(
        (conversation: any) => ({
          conversationId: conversation._id,
          lastMessage: conversation.lastMessage,
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
  return (
    <div className="h-full flex max-md:flex-col">
      {isLoading && <Loader />}
      <div className="px-[30px] py-[24px] max-w-[310px] min-w-[310px] border-r border-[#EEEEEE] h-full max-lg:px-[20px] max-md:max-w-full max-md:overflow-auto max-md:border-b">
        <div className="flex flex-col gap-[10px]">
          {chats.map((chat: ChatProfileProps, index: number) => (
            <ChatProfile key={index} chat={chat} />
          ))}
        </div>
      </div>
      <div className="w-full max-md:min-h-[500px] ">
        <Outlet />
      </div>
    </div>
  );
};

export default ChatLayout;
