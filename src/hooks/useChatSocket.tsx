import { useEffect, useCallback } from "react";
import { useSocket } from "../providers/socket-provider";
import { useDispatch } from "react-redux";
import { CONVERSATION_TAG, lockedBoxApi } from "../redux/api";

export const useChatSocket = (
  userId: string,
  appendMessages: (key: string, conversationId: string, message: any) => void
) => {
  const { socket } = useSocket();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!socket) return;

    socket.on("receive_message", (data: any) => {
      console.log("Received message:", data, userId);
      if (data.message.senderDetails._id.toString() != userId.toString()) {
        appendMessages("today", data.conversationId, data.message);
      }
      // For updating Chat profiles last message and time
      dispatch(lockedBoxApi.util.invalidateTags([CONVERSATION_TAG]));
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
      // if (!socket) return;

      socket.emit("send_message", data);
    },
    [socket]
  );

  return { sendMessage };
};
