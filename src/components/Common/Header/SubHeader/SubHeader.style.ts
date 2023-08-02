import styled from "@emotion/styled";
import COLORS from "@styles/constants/colors";
import TEXT_STYLES from "@styles/constants/textStyles";

export const BackArrowContainer = styled.div`
  width: 24px;
  height: 24px;
  //margin-right: auto;
`;

export const Title = styled.div`
  color: ${COLORS.grayscale.black};
  ${TEXT_STYLES.SubHead1}
  text-align: center;
  flex-grow: 1;
`;

export const SubContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 3%;
`;

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px; /* Adjust this height according to your design */
  display: flex;
  align-items: center;
  background-color: ${COLORS.navi_bg};
`;
