"use client";

import { useRealTimeConnection } from "../../hooks/use-real-time-connection/use-real-time-connection";

export const GameRoom = () => {
  // const a = useGetCurrentUser();
  const { isConnected, currentConnectionId, selectedLetters } =
    useRealTimeConnection();

  const handleEvent = () => {
    selectedLetters("s");
  };
  return (
    <div>
      {/* <div>
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
      <div>MY chance</div> */}

      <button onClick={handleEvent}>Key press</button>
    </div>
  );
};
