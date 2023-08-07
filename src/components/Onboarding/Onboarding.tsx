import OnboardingButton from "../Common/Button/Onboarding/OnboardingButton";
import { useState } from "react";
import * as styles from "./Onboarding.style";
import { ONBOARDING_INFO } from "./OnboardingInfo";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { onboardingAtom } from "@/states/onboardingAtom";

const Onboarding = () => {
  const navigate = useNavigate();
  const setOnboardingAtom = useSetRecoilState(onboardingAtom);
  const [step, setStep] = useState<number>(0);
  const onClick = () => {
    setStep(step + 1);
    if (step == 2) {
      setOnboardingAtom({
        isOnboarding: false,
      });
      navigate("/");
    }
  };
  return (
    <>
      <styles.Container>
        <styles.OnboardingImage url={ONBOARDING_INFO[step].image} />
        <styles.RectContainer>
          <styles.Rect2 />
          <styles.Rect1 />
        </styles.RectContainer>
        <styles.MessageContainer>
          <styles.Message>
            <styles.MessageText>
              {ONBOARDING_INFO[step].messageText}
            </styles.MessageText>
          </styles.Message>
          <OnboardingButton
            label={ONBOARDING_INFO[step].buttonLabel}
            onClick={onClick}
          />
        </styles.MessageContainer>
      </styles.Container>
    </>
  );
};
export default Onboarding;
