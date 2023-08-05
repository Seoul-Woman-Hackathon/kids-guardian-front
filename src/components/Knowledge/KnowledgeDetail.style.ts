import styled from "@emotion/styled";
import COLORS from "@styles/constants/colors";
import TEXT_STYLES from "@styles/constants/textStyles";
interface KnowlegeImageProps {
  url: string;
}

export const Container = styled.div`
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  gap: 30px;
  margin-top: 50px;
  margin-bottom: 100px;
`;

export const Image = styled.div<KnowlegeImageProps>`
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  border-radius: 20px;
  width: 500px;
  height: 300px;
  background-size: cover;
`;

export const TextContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 500px;
  background: #fefbf2;
  border: 1.5px solid #e7e3dd;
  border-radius: 12px;
  gap: 10px;
`;

export const TextTitle = styled.div`
  ${COLORS.grayscale.black}
  ${TEXT_STYLES.H1}
  font-size: 22px;
`;

export const TextBody = styled.div`
  ${COLORS.grayscale.black}
  ${TEXT_STYLES.Body2}
`;
