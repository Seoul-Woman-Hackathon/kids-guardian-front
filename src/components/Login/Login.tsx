import { useNavigate } from "react-router-dom";
import LoginButton from "../Common/Button/Login/LoginButton";
import * as styles from "./Login.style";
import SignUpButton from "../Common/Button/SignUp/SignUpButton";
import { useState } from "react";
import LoginInput from "../Common/Input/Login/LoginInput";
import { login } from "@/apis/login";
import { LoginDto } from "@/types/user";
const Login = () => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const navigate = useNavigate();
  const onLoginClick = async () => {
    const data: LoginDto = {
      email: email,
      password: pw,
    };
    const response = await login(data);
    if (response.isSuccess) {
      navigate("/");
    }
  };
  const onSignUpClick = () => {
    navigate("/signUp");
  };

  return (
    <styles.Container>
      <styles.Logo />

      <styles.InputContainer>
        <LoginInput
          label="이메일 주소 입력"
          value={email}
          setValue={setEmail}
        />
        <LoginInput label="비밀번호 입력" value={pw} setValue={setPw} />
      </styles.InputContainer>
      <styles.ButtonContainer>
        <LoginButton onClick={onLoginClick} />
        <SignUpButton onClick={onSignUpClick} />
      </styles.ButtonContainer>
    </styles.Container>
  );
};

export default Login;
