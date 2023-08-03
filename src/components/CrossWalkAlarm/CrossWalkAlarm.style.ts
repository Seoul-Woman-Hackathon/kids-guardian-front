import styled from "@emotion/styled";
import COLORS from "@styles/constants/colors";
import TEXT_STYLES from "@styles/constants/textStyles";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${COLORS.main.primary};
  justify-content: center;
  align-items: center;
  position: relative;
  display: flex;
`;
export const RectContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
`;
export const Rect = styled.div`
  height: 180px;
  background-color: ${COLORS.grayscale.gray400};
`;

export const Image = styled.img`
  position: absolute;
  z-index: 1;
  bottom: 0px;
  content: url("src/assets/animation/gifImage/alarm2.gif");
  width: 100%;
  height: 80%;
`;

export const Message = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  border-radius: 12px;
  background-color: ${COLORS.navi_bg};
  width: 80%;
  height: 90px;
  top: 10%;
  z-index: 10;
`;

export const MessageText = styled.div`
  text-align: center;
  color: ${COLORS.error};
  ${TEXT_STYLES.H1}
  z-index:10;
`;
