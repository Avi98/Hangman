"use client";

import { Keys } from "@repo/ui";
import { KeysWrapper, LastRow } from "./style";
import { useRealTimeConnection } from "../../hooks/use-real-time-connection/use-real-time-connection";

const letters = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

export const AllLetters = () => {
  const {
    selectedLetters: updatedSelectedLetters,
    gameState: { correctSelectedLetters, wrongSelectedLetters },
  } = useRealTimeConnection();
  return (
    <KeysWrapper>
      {letters.slice(0, 20).map((l) => (
        <Keys
          key={l}
          letter={l}
          onClick={updatedSelectedLetters}
          isRightLetter={false}
          isWrongLetter={false}
        />
      ))}
      <LastRow />
      {letters.slice(-6).map((letter) => (
        <Keys
          key={letter}
          letter={letter}
          onClick={updatedSelectedLetters}
          isRightLetter={correctSelectedLetters.includes(
            letter as (typeof correctSelectedLetters)[number]
          )}
          isWrongLetter={wrongSelectedLetters.includes(
            letter as (typeof correctSelectedLetters)[number]
          )}
        />
      ))}
    </KeysWrapper>
  );
};
