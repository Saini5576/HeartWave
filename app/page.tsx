import { SigninForm } from "@/components/Authentication/signin";
import { Toaster } from "react-hot-toast";

export default async function Home() {
  return (
    <>
      <SigninForm />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}
