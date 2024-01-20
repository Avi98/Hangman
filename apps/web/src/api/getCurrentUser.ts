import { env } from "../utils/env";
import { GetAPIBuilder } from "./common/getAPIBuilder";

export const getCurrentUser = () => {
  const api = new GetAPIBuilder("/user", env.BE_BASE_URL);
  api.sendRequest();
};
