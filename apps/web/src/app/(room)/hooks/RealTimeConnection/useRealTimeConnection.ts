import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Socket as SocketType } from "socket.io-client";
import RealTimeConnection from "./realtimeConnection";

interface IUseRealTimeConnection {
  isConnected: boolean;
  currentConnectionId: string | null;
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
    return;
  }, []);

  console.log({ isConnected, connectionId });

  return {
    isConnected,
    currentConnectionId: connectionId,
  };
};
