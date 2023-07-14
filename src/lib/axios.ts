import Axios from "axios";
import { setupCache } from "axios-cache-interceptor";

export const axios = setupCache(Axios);

export async function invalidateCache(key: string): Promise<void> {
  await axios.storage.remove(key);
}
