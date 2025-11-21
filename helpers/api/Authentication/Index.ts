import { SignInRequest } from "@/types/models/RequestModel/Authentication/SignInRequest";
import { SignUpRequest } from "@/types/models/RequestModel/Authentication/SignUpRequest";
import * as api from "../Handler";
import { ApiEndpoints } from "../../Endpoints";
import https from "https";
import axios from "axios";

const isDev = process.env.NODE_ENV === "development";
const agent = new https.Agent({
  rejectUnauthorized: !isDev ? true : false,
});
export const SignIn = async (request: SignInRequest) => {
  return await api.post<any>(ApiEndpoints.SighIn, request);
};

export const SignUp = async (request: SignUpRequest) => {
  return await api.post<any>(ApiEndpoints.SignUp, request);
};

export const TokenVerify = async (cookie: string) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_AUTH_ENDPOINT}${ApiEndpoints.TokenVerify}`,
    {
      headers: {
        Cookie: cookie,
      },
      httpsAgent: agent,
    }
  );

  return res;
};

export const Logout = async () => {
  return await api.post<any>(ApiEndpoints.Logout);
};
