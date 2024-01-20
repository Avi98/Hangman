import { useCallback, useEffect, useRef, useState } from "react";
import RealTimeConnection from "./realtimeConnection";

interface IUseRealTimeConnection {
  isConnected: boolean;
  currentConnectionId: string | null;
  onKeyPressed: () => void;
}

type SocketRefType = () => RealTimeConnection;

function assertSocketRef(
  socketRef: SocketRefType | RealTimeConnection
): RealTimeConnection {
  if (typeof socketRef === "function") return socketRef();
  return socketRef;
}

export const useRealTimeConnection = (): IUseRealTimeConnection => {
  const [isConnected, setIsConnected] = useState(false);
  const [connectionId, setConnectionId] = useState("");

  const socketRef = useRef<SocketRefType | RealTimeConnection>(
    () => new RealTimeConnection()
  );

  const connectToWebSocket = useCallback(async () => {
    if (typeof socketRef.current !== "function") {
      await socketRef.current.establishConnection();
      setConnectionId(socketRef.current.getConnectionId() ?? "");
    }
  }, []);

  const disconnectConnection = useCallback(() => {
    if (typeof socketRef.current !== "function") socketRef.current.disconnect();
  }, []);

  useEffect(() => {
    const socket = assertSocketRef(socketRef.current);
    const isConnected = socket.getConnectionId();

    socketRef.current = socket;
    if (!isConnected) connectToWebSocket();

    // return () => disconnectConnection();
  }, [connectToWebSocket, disconnectConnection, setIsConnected]);

  const sendMessageCb = useCallback(() => {
    if (typeof socketRef.current !== "function")
      return socketRef.current.sendMessage("key-pressed", {
        data: "key_pressed event",
      });
  }, []);

  return {
    isConnected,
    currentConnectionId: connectionId,
    onKeyPressed: sendMessageCb,
  };
};
