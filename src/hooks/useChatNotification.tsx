import { useEffect } from "react";
import { useSocket } from "../providers/socket-provider";

export const useChatNotification = (
  handleUpdateLatestMessages: (
    conversationId: string,
    lastMessage: string
  ) => void
) => {
  const { socket } = useSocket();

  useEffect(() => {
    if (!socket) return;

    socket.on("new_message", (data: any) => {
      console.log("New message:", data);
      handleUpdateLatestMessages(
        data.conversationId,
        data.message?.contentType == "text" ? data.message?.content : "Image"
      );
    });

    return () => {
      socket?.off("new_message");
    };
  }, [socket]);
};
