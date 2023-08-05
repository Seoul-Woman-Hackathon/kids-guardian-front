import styled from "@emotion/styled";
import COLORS from "@styles/constants/colors";
import TEXT_STYLES from "@styles/constants/textStyles";

export const KnowlegeButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 6px 12px;
  border-radius: 8px;
  background-color: ${COLORS.main.primary};
  z-index: 10;
`;

export const KnowledgeButtonText = styled.div`
  ${TEXT_STYLES.Button2}
  color: #FFFEFB;
  z-index: 11;
`;
