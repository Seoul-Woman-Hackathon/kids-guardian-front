import styled from "@emotion/styled";
import COLORS from "@styles/constants/colors";
import TEXT_STYLES from "@styles/constants/textStyles";

export const SignupOffBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 140px;
  background-color: #e7e3dd;
  border-radius: 14px;
  width: 360px;
  height: 50px;
`;

export const SignUpOnBtn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 140px;
  background-color: #ffbf1a;
  border-radius: 14px;
  width: 360px;
  height: 50px;
`;

export const SignupOffText = styled.div`
  color: #8f8c88;
  ${TEXT_STYLES.Button1}
`;

export const SignupOnText = styled.div`
  color: ${COLORS.grayscale.white};
  ${TEXT_STYLES.Button1};
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  gap: 60px;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
`;

export const TitleText = styled.div`
  ${TEXT_STYLES.H2}
`;
