import { useNavigate } from "react-router-dom";
import NoUser from "../../../../assets/icons/if-no-user.png";
import { getUrl } from "../../../../utils/helper";

const ChatProfile = ({ chat }: { chat: ChatProfileProps }) => {
  const navigate = useNavigate();
  return (
    <div
      className="active flex gap-[8px] p-[12px] rounded-[12px] border border-[#EEEEEE] hover:bg-[#EEEEEE] cursor-pointer items-center bg-[#EEEEEE]"
      onClick={() => navigate(`/dashboard/message/${chat.conversationId}`)}
    >
      <img
        className="w-[48px] h-[48px] object-cover"
        src={
          chat.profile.profileImage ? getUrl(chat.profile.profileImage) : NoUser
        }
        alt=""
      />
      <div className="">
        <p className=" font-semibold">
          {chat.profile.firstName} {chat.profile.lastName?.[0]}.
        </p>
        <p className="text-[14px] text-[#959595]">{chat.lastMessage}</p>
      </div>
    </div>
  );
};

export default ChatProfile;
