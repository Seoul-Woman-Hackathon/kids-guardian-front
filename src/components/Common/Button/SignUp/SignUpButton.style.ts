import styled from "@emotion/styled";
import COLORS from "@styles/constants/colors";
export const SignUpButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 140px;
  background-color: ${COLORS.grayscale.white};
  border: 2.5px solid #ffd12d;
  border-radius: 14px;
  width: 340px;
`;
export const LoginButtonText = styled.div`
  text-align: center;
  color: ${COLORS.main.primary};
`;
