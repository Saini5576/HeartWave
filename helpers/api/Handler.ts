// helpers/api/Handler.ts
import { api } from "./core";

export const get = <T>(url: string): Promise<T> =>
  api.get(url).then((res) => res.data);

export const post = <T>(url: string, payload?: any): Promise<T> =>
  api.post(url, payload).then((res) => res.data);

export const put = <T>(url: string, payload?: any): Promise<T> =>
  api.put(url, payload).then((res) => res.data);

export const del = <T>(url: string, payload?: any): Promise<T> =>
  api.delete(url, { data: payload }).then((res) => res.data);

export const patch = <T>(url: string, payload?: any): Promise<T> =>
  api.patch(url, payload).then((res) => res.data);
