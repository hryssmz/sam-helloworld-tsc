// layers/utils/index.ts
import axios from "axios";

export async function getGlobalIp() {
  const { data } = await axios<string>("https://ifconfig.me");
  return data;
}
