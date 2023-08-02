import styled from "@emotion/styled";
import COLORS from "@styles/constants/colors";

export const Navigation = styled.div`
  padding: 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${COLORS.navi_bg};
`;

export const IconContainer = styled.div`
  filter: drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1));
`;
