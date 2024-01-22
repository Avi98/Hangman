import { useCallback, useEffect, useRef, useState } from "react";
import RealTimeConnection from "./realtime-connection";
import { assertSocketRef } from "../utils";
import { SocketRefType } from "../types";

export const useInitializeConnection = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [connectionId, setConnectionId] = useState("");

  const socketRef = useRef<SocketRefType | RealTimeConnection>(
    () => new RealTimeConnection()
  );

  const connectToWebSocket = useCallback(async () => {
    if (typeof socketRef.current !== "function") {
      await socketRef.current.establishConnection({
        roomId: String(100),
        roomName: "testRoom",
      });
      setConnectionId(socketRef.current.getConnectionId() ?? "");
      setIsConnected(socketRef.current.getIsConnected());
    }
  }, []);

  const disconnectConnection = useCallback(() => {
    if (typeof socketRef.current !== "function") socketRef.current.disconnect();
  }, []);

  useEffect(() => {
    const socket = assertSocketRef(socketRef.current);
    const isConnected = socket.getConnectionId();

    socketRef.current = socket;
    if (isConnected) return;

    connectToWebSocket();

    return () => {
      if (isConnected) disconnectConnection();
    };
  }, [connectToWebSocket, disconnectConnection, setIsConnected]);

  return { isConnected, connectionId, client: socketRef.current };
};
