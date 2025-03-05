import React, { createContext, useContext, useEffect, useState } from "react";
import { io as ClientIO } from "socket.io-client";
import { getToken } from "../utils/helper";

interface SocketProviderProps {
  socket: any | null;
  isConnected: boolean;
}

const SocketContext = createContext<SocketProviderProps>({
  socket: null,
  isConnected: false,
});

export const useSocket = () => {
  return useContext(SocketContext);
};

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  const [socket, setSocket] = useState<any>(null);
  const [isConnected, setIsConnected] = useState(false);
  const token = getToken();

  useEffect(() => {
    if (!token) {
      if (socket) {
        socket.disconnect();
        setSocket(null);
      }
      return;
    }

    const socketInstance = new (ClientIO as any)(
      import.meta.env.VITE_BACKEND_URL,
      {
        extraHeaders: {
          authorization: `bearer ${token}`,
        },
      }
    );

    socketInstance.on("connect", () => {
      console.log("connected");
      setIsConnected(true);
    });

    socketInstance.on("disconnect", () => {
      console.log("disconnected");
      setIsConnected(false);
    });

    setSocket(socketInstance);

    return () => {
      socketInstance.disconnect();
    };
  }, []);
  return (
    <SocketContext.Provider value={{ socket, isConnected }}>
      {children}
    </SocketContext.Provider>
  );
};
