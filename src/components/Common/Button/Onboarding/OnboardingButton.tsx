import * as styles from "./OnboardingButton.style";

interface OnboardingProps {
  label: string;
  onClick?: () => void;
}

const OnboardingButton = ({ label, onClick }: OnboardingProps) => {
  return (
    <styles.OnboardingButton onClick={onClick}>
      <styles.OnBoardingText>{label}</styles.OnBoardingText>
    </styles.OnboardingButton>
  );
};
export default OnboardingButton;
