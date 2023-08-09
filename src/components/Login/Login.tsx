
import { useNavigate } from "react-router-dom";
import LoginButton from "../Common/Button/Login/LoginButton";
import * as styles from "./Login.style";
import SignUpButton from "../Common/Button/SignUp/SignUpButton";
const Login = () => {
  const navigate = useNavigate();
  const onLoginClick = () => {
    navigate("/");
  };
  const onSignUpClick = () => {};
  return (
    <styles.Container>
      <styles.Logo />

      <styles.InputContainer>
        <styles.Input placeholder="이메일 주소 입력" />
        <styles.Input placeholder="비밀번호 입력" />
      </styles.InputContainer>
      <styles.ButtonContainer>
        <LoginButton onClick={onLoginClick} />
        <SignUpButton onClick={onSignUpClick} />
      </styles.ButtonContainer>
    </styles.Container>
  );
};

export default Login;
