import { LoginDto, SignUpDto } from "@/types/user";
import { postAsync } from ".";

export async function login(loginData: LoginDto) {
  const response = await postAsync(`/user/login/`, loginData);
  return response;
}

export async function signUp(signUpData: SignUpDto) {
  const response = await postAsync(`/user/signup/`, signUpData);
  return response;
}
