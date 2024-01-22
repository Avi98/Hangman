import { useCallback } from "react";
import { useInitializeConnection } from "../use-initalize-connection";

interface IUseRealTimeConnection {
  isConnected: boolean;
  currentConnectionId: string | null;
  onKeyPressed: (letter: string) => void;
}

export const useRealTimeConnection = (): IUseRealTimeConnection => {
  const { client, isConnected, connectionId } = useInitializeConnection();

  const sendMessageCb = useCallback(
    (letter: string) => {
      if (typeof client !== "function") return client.letterSelected(letter);
    },
    [client]
  );

  return {
    isConnected,
    currentConnectionId: connectionId,
    onKeyPressed: sendMessageCb,
  };
};
