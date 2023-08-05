import styled from "@emotion/styled";
import COLORS from "@styles/constants/colors";
import TEXT_STYLES from "@styles/constants/textStyles";

export const OnboardingButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 140px;
  width: 340px;
  height: 55px;
  border-radius: 14px;
  background-color: ${COLORS.main.secondary};
  z-index: 10;
`;

export const OnBoardingText = styled.div`
  ${TEXT_STYLES.Button1}
  color: #FFFEFB;
  z-index: 11;
`;
