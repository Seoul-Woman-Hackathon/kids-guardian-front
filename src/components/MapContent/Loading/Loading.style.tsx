import styled from '@emotion/styled';
import COLORS from '@styles/constants/colors';
import TEXT_STYLES from '@styles/constants/textStyles';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 1000;
  background-color: ${COLORS.bg};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextWrapper = styled.div`
  position: relative;
`;

export const Text = styled.div`
  ${TEXT_STYLES.SubHead2}
  width:171px;
  text-align: center;
  position: absolute;
  top: 13px;
`;
