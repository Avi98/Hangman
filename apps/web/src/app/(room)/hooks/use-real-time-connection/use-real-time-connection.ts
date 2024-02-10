import { useCallback } from "react";
import { useInitializeConnection } from "../use-initalize-connection";
import { useHangmanStore } from "../../../../store/use-hangman-store";
import { Store } from "../../../../store/defaultState";

interface IUseRealTimeConnection {
  currentConnectionId: string | null;
  selectedLetters: (letter: string) => Promise<void>;
  gameState: Store["gameState"];
}

export const useRealTimeConnection = (): IUseRealTimeConnection => {
  const { updateSelectedLetters, gameState } = useHangmanStore(
    (state) => state
  );

  const { client, isConnected, connectionId } = useInitializeConnection();

  const selectedLetters = useCallback(
    async (letter: string) => {
      await client?.letterSelected(letter);
    },
    [client]
  );

  return {
    gameState,
    currentConnectionId: connectionId,
    selectedLetters,
  };
};
