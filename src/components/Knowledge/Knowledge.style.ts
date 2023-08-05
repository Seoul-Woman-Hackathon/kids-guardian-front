import styled from "@emotion/styled";
import COLORS from "@styles/constants/colors";
import TEXT_STYLES from "@styles/constants/textStyles";

interface KnowlegeImageProps {
  url: string;
}

export const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;
export const KnowledgeImageContainer = styled.div<KnowlegeImageProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-image: url(${(props) => props.url}), #79756a;
`;

export const KnowledgeTitle = styled.div`
  ${TEXT_STYLES.SubHead1}
  color:${COLORS.grayscale.black}
`;

export const KnowledgeSubTitle = styled.div`
  ${TEXT_STYLES.Body2}
  color:${COLORS.grayscale.black}
`;
