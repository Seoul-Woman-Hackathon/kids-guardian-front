import * as styles from "./LoginButton.style";
interface LoginButtonProps {
  onClick: () => void;
}
const LoginButton = ({ onClick }: LoginButtonProps) => {
  return (
    <styles.LoginButtonContainer onClick={onClick}>
      <styles.LoginButtonText>로그인</styles.LoginButtonText>
    </styles.LoginButtonContainer>
  );
};
export default LoginButton;
