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
      <div>Name:??</div>
      <div>Total number of users: ????</div>
      <div>Lives remaining:????</div>

      <label>All players in room ???</label>
      <select title="All players in room ???">
        <option>??</option>
        <option>??</option>
        <option>??</option>
      </select>
      <div>My score</div>
      <div>MY chance</div>
      <button onClick={onKeyPressed}>
        {" "}
        send event to {`${currentConnectionId}`}
      </button>
      <Hangman />
      <button>Skip my turn</button>
      <button>Skip my turn</button>
    </div>
  );
};
