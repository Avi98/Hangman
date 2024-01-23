import { useCallback } from "react";
import { useInitializeConnection } from "../use-initalize-connection";
import { useHangmanStore } from "../../../../store/use-hangman-store";
import RealTimeConnection from "../use-initalize-connection/realtime-connection";

interface IUseRealTimeConnection {
  isConnected: boolean;
  currentConnectionId: string | null;
  selectedLetters: (letter: string) => Promise<void>;
}

export const useRealTimeConnection = (): IUseRealTimeConnection => {
  const { client, isConnected, connectionId } = useInitializeConnection();

  const { updateSelectedLetters } = useHangmanStore((state) => state);

  const selectedLetters = useCallback(
    async (letter: string) => {
      console.log({ client });
      await client?.letterSelected(letter);
    },
    [client]
  );

  return {
    isConnected,
    currentConnectionId: connectionId,
    selectedLetters,
  };
};
