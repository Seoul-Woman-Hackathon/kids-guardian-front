import styled from "@emotion/styled";
import COLORS from "@styles/constants/colors";
import TEXT_STYLES from "@styles/constants/textStyles";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${COLORS.bg};
  justify-content: center;
  align-items: center;
  position: relative;
  display: flex;
`;

export const RectContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0px;
  width: 100%;
`;

export const Rect1 = styled.div`
  height: 45px;
  background-color: ${COLORS.main.primary};
`;

export const Rect2 = styled.div`
  background-color: ${COLORS.grayscale.gray400};
  height: 85px;
`;

export const ImageContainer = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 20px;
`;

export const SpeechContainer = styled.div`
  position: absolute;
  bottom: 440px;
  z-index: 1;
`;

export const Text1 = styled.div`
  color: ${COLORS.grayscale.black};
  ${TEXT_STYLES.H4}
  z-index: 2;
`;
