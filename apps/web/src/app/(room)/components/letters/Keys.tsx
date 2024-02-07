"use client";

import { Keys } from "@repo/ui";
import { KeysWrapper, LastRow } from "./style";

const letters = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");
export const AllLetters = () => {
  return (
    <KeysWrapper>
      {letters.slice(0, 20).map((l) => (
        <Keys letter={l} onClick={() => {}} />
      ))}
      <LastRow />
      {letters.slice(-6).map((letters) => (
        <Keys letter={letters} onClick={() => {}} />
      ))}
    </KeysWrapper>
  );
};
