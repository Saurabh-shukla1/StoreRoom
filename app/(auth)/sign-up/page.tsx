import { Card } from "@/components/ui/card";
import { SignUpView } from "@/modules/auth/ui/sign-up-view";
import { log } from "console";

const SignUpPage = () => {
    console.log("SignUpPage rendered");
  return (
    <SignUpView />
  );
};

export default SignUpPage;