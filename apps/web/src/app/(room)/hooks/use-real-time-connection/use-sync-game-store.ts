import { useCallback, useEffect } from "react";
import RealTimeConnection from "../use-initalize-connection/realtime-connection";
import { useHangmanStore } from "../../../../store/use-hangman-store";

export const useSyncGameListener = ({
  listenLetterSelected: listenLetterSelect,
}: RealTimeConnection) => {
  const { setGameState } = useHangmanStore((state) => state);

  const updateGameState = useCallback(async () => {
    const gameStore = listenLetterSelect();

    //     setGameState({});
  }, [listenLetterSelect]);

  useEffect(() => {
    updateGameState();
  }, [updateGameState]);

  return;
};
