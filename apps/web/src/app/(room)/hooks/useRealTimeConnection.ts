import { useCallback, useEffect, useRef, useState } from "react";
import { getSocketBaseUrl } from "./utils";
import Socket from "socket.io-client";

export const useRealTimeConnection = () => {
  const [isConnected, setIsConnected] = useState(false);

  const retry = useRef(0);
  const socketRef = useRef<WebSocket>();

  const connectToWebSocket = useCallback(() => {
    const socketUrl = getSocketBaseUrl();
    if (socketUrl) {
      const socket = Socket(socketUrl);

      socket.on("error", (e) => {
        //retry to connect
        console.log("error", e);
      });

      socket.on("connect", () => {
        console.log("client connected");
      });

      socket.on("open", () => {
        console.log("client-server socket connection established");
      });

      socket.on("message", (event) => {
        console.log("Message from server:", event.data);
      });
    }
  }, []);

  useEffect(() => {
    if (isConnected || socketRef.current) return;

    connectToWebSocket();
    return () => {
      socketRef.current?.close();
    };
  }, []);

  return socketRef.current;
};
