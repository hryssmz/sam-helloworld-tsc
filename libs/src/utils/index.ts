// utils/index.ts
import axios from "axios";

export const getGlobalIp = async () => {
  const { data } = await axios<string>("https://ifconfig.me");
  return data;
};
