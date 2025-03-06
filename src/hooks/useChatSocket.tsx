import { useEffect, useCallback } from "react";
import { useSocket } from "../providers/socket-provider";

export const useChatSocket = (
  appendMessages: (key: string, message: any) => void
) => {
  const { socket } = useSocket();

  useEffect(() => {
    if (!socket) return;
    
    socket.on("receive_message", (data: any) => {
      console.log("Received message:", data);
      // onMessageReceived(conversationId, message);
      appendMessages("today", data.message);
    });

    socket.on("error", (message: string) => {
      console.log("error message:::", message);
    });

    return () => {
      socket?.off("receive_message");
      socket?.off("error");
    };
  }, [socket]);

  const sendMessage = useCallback(
    (data: string) => {
      console.log("eneterd in send message");
      // if (!socket) return;

      socket.emit("send_message", data);
    },
    [socket]
  );

  return { sendMessage };
};
