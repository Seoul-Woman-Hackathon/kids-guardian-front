import styled from "@emotion/styled";
import COLORS from "@styles/constants/colors";
import TEXT_STYLES from "@styles/constants/textStyles";

interface KnowlegeImageProps {
  url: string;
}

export const Container = styled.div`
  margin-top: 100px;
  margin-bottom: 140px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  gap: 20px;
`;
export const KnowledgeImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 400px;
`;

export const ImageContainer = styled.div<KnowlegeImageProps>`
  position: relative;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.url});
  background-repeat: no-repeat;
  border-radius: 14px;
  width: 100%;
  height: 100%;
  background-size: cover;
`;

export const KnowledgeTitle = styled.div`
  padding: 20px;
  ${TEXT_STYLES.SubHead1}
  color:${COLORS.grayscale.white}
`;

export const KnowledgeSubTitle = styled.div`
  padding: 20px;
  ${TEXT_STYLES.Body2}
  color:${COLORS.grayscale.white}
`;

export const ButtonContainer = styled.div`
  padding: 20px;
`;
