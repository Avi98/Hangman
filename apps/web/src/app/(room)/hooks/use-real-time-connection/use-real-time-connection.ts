import { useCallback } from "react";
import { useInitializeConnection } from "../use-initalize-connection";
import { useHangmanStore } from "../../../../store/use-hangman-store";

export const useRealTimeConnection = () => {
  const { gameState } = useHangmanStore((state) => state);

  const { client, isConnected, connectionId } = useInitializeConnection();

  const selectedLetters = useCallback(
    (letter: string) => {
      client?.letterSelected(letter);
    },
    [client]
  );

  return {
    gameState,
    currentConnectionId: connectionId,
    selectedLetters,
  };
};
