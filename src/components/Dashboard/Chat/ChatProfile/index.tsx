import { useNavigate } from "react-router-dom";
import NoUser from "../../../../assets/icons/if-no-user.png";
import { getUrl } from "../../../../utils/helper";

const ChatProfile = ({
  chat,
  setChats,
}: {
  chat: ChatProfileProps;
  setChats: any;
}) => {
  const navigate = useNavigate();

  const handleReadAllMessages = (id: string) => {
    setChats((prev: ChatProfileProps[]) => {
      return prev.map((chat) =>
        chat.conversationId === id ? { ...chat, totalUnread: 0 } : chat
      );
    });
    navigate(`/dashboard/message/${id}`);
  };
  return (
    <div
      className="active flex gap-[8px] p-[12px] rounded-[12px] border border-[#EEEEEE] hover:bg-[#EEEEEE] cursor-pointer items-center bg-[#EEEEEE]"
      // onClick={() => navigate(`/dashboard/message/${chat.conversationId}`)}
      onClick={() => handleReadAllMessages(chat.conversationId)}
    >
      <img
        className="w-[48px] h-[48px] object-cover rounded-full"
        src={
          chat.profile.profileImage ? getUrl(chat.profile.profileImage) : NoUser
        }
        alt=""
      />
      <div className="w-full">
        <p className=" font-semibold">
          {chat.profile.firstName} {chat.profile.lastName?.[0]}.
        </p>
        <div className="flex justify-between">
          <p className="text-[14px] text-[#959595]">
            {chat.lastMessageType == "text" ? chat.lastMessage : "Image"}
          </p>
          {chat.totalUnread ? (
            <span className="bg-[#235370] text-white rounded-full text-xs w-[20px] h-[20px] flex justify-center items-center">
              {chat.totalUnread}
            </span>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatProfile;
