"use client";
import { Hangman } from "@repo/ui";
import { useRealTimeConnection } from "../hooks/useRealTimeConnection";
import { useGetCurrentUser } from "../../../api/getCurrentUser";

export const GameRoom = () => {
  const a = useGetCurrentUser();
  const socket = useRealTimeConnection();
  console.log({ socket: a, user: a.data });

  return <Hangman />;
};
