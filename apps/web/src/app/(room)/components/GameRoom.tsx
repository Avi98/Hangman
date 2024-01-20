"use client";
import { Hangman } from "@repo/ui";
import { useRealTimeConnection } from "../hooks/RealTimeConnection/useRealTimeConnection";
import { useGetCurrentUser } from "../../../api/getCurrentUser";

export const GameRoom = () => {
  // const a = useGetCurrentUser();
  const { isConnected, currentConnectionId, onKeyPressed } =
    useRealTimeConnection();

  return (
    <div>
      <div>
        connect:{isConnected} to {`${currentConnectionId}`}
      </div>
      <button onClick={onKeyPressed}>
        {" "}
        send event to {`${currentConnectionId}`}
      </button>
      {/* <Hangman /> */}
    </div>
  );
};
