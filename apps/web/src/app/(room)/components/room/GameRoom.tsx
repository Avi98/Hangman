"use client";

import { useRealTimeConnection } from "../../hooks/RealTimeConnection/useRealTimeConnection";
import { Hangman } from "@repo/ui";

export const GameRoom = () => {
  // const a = useGetCurrentUser();
  const { isConnected, currentConnectionId, onKeyPressed } =
    useRealTimeConnection();

  return (
    <div>
      <div>
        connect: {isConnected ? "true" : "false"} to {`${currentConnectionId}`}
      </div>
      <button onClick={onKeyPressed}>
        {" "}
        send event to {`${currentConnectionId}`}
      </button>
      <Hangman />
    </div>
  );
};
