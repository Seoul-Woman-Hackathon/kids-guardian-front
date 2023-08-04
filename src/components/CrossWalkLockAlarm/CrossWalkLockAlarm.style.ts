import styled from "@emotion/styled";
import COLORS from "@styles/constants/colors";
import TEXT_STYLES from "@styles/constants/textStyles";

export const ModalBg = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(136, 136, 136, 0.47);
`;

export const LockContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 297px;
  height: 298px;
  border-radius: 15px;
  background: ${COLORS.navi_bg};
`;

export const LockComponent = styled.div`
  position: absolute;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;
export const LockText = styled.div`
  color: ${COLORS.grayscale.black};
  ${TEXT_STYLES.H1}
  z-index: 1;
`;
export const LockImage = styled.img`
  width: 100px;
  height: 154px;
  content: url("/src/assets/icons/Lock/Lock.svg");
  z-index: 2;
`;
