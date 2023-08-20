import styled from '@emotion/styled';
import COLORS from '@styles/constants/colors';
export const HeaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px; /* Adjust this height according to your design */
  background-color: ${COLORS.navi_bg};
  z-index: 10;
`;
export const Header = styled.div`
  position: relative;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Logo = styled.div`
  width: 100px;
  height: 70px;
  background-image: url("https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/Logo_final.svg");
  background-repeat: no-repeat;
  background-size: cover;
`;
