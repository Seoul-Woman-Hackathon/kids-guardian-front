import * as styles from "./SignUpButton.style";
interface SignUpButtonProps {
  onClick: () => void;
}
const SignUpButton = ({ onClick }: SignUpButtonProps) => {
  return (
    <styles.SignUpButtonContainer onClick={onClick}>
      <styles.LoginButtonText>회원가입</styles.LoginButtonText>
    </styles.SignUpButtonContainer>
  );
};
export default SignUpButton;
