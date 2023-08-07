import styled from "@emotion/styled";
import COLORS from "@styles/constants/colors";

export const LoginButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 140px;
  background-color: ${COLORS.main.primary};
  border-radius: 14px;
`;
export const LoginButtonText = styled.div`
  text-align: center;
  color: ${COLORS.grayscale.white};
`;
