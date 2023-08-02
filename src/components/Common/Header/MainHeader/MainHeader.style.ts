import styled from "@emotion/styled";
import COLORS from "@styles/constants/colors";
export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px; /* Adjust this height according to your design */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.navi_bg};
`;
export const Header = styled.div`
  position: relative;
  height: 100px;
`;
export const LogoContainer = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
