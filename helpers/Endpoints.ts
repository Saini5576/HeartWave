import { IEndpoints } from "@/types/interfaces/IEndpoints";
const auth_endpoint_preffix = "/api/Account/";

export const ApiEndpoints: IEndpoints = {
  SighIn: auth_endpoint_preffix + "login",
  SignUp: auth_endpoint_preffix + "register",
  ForgotPassword: auth_endpoint_preffix + "forgot-password",
  GenerateAccessToken: auth_endpoint_preffix + "generate-accessToken",
  RestPassword: auth_endpoint_preffix + "reset-password",
  Logout: auth_endpoint_preffix + "logout",
  EmailConfirmation: auth_endpoint_preffix + "email-confirmation",
  TokenVerify: auth_endpoint_preffix + "me",
};
