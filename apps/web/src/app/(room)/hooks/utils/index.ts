import { env } from "../../../../utils/env";

const LOCAL_FALLBACK_URL = "ws://localhost:3030";

export const getSocketBaseUrl = () => {
  try {
    const backendBaseUrl = new URL(env.BE_BASE_URL);
    backendBaseUrl.protocol =
      backendBaseUrl.protocol === "https:" ? "wss:" : "ws:";

    return backendBaseUrl.toString();
  } catch (error) {
    console.error(error);
    return LOCAL_FALLBACK_URL;
  }
};
