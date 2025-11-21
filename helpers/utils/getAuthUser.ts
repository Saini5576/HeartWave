import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import ApiService from "../api/Index";

type AuthUser = {
  userId: string;
  email: string;
  roles?: string[];
};

export const getAuthUser = async (): Promise<AuthUser | null> => {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore
    .getAll()
    .map((cookie) => `${cookie.name}=${cookie.value}`)
    .join("; ");

  // const AuthToken = cookieStore.get("AuthToken")?.value || null;
  // console.log("AuthToken:", AuthToken);
  try {
    const res = await ApiService.TokenVerify(cookieHeader);

    const { content: user } = res.data;

    return user;
  } catch (error: any) {
    return null;
  }
};
