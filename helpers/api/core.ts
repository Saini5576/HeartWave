import { serverApi } from "./ServerHandler";
import { clientApi } from "./ClientHandler";

export const api = typeof window === "undefined" ? serverApi : clientApi;
