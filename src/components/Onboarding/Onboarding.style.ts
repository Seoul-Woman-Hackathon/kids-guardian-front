import styled from "@emotion/styled";
import COLORS from "@styles/constants/colors";
import TEXT_STYLES from "@styles/constants/textStyles";

interface OnboardingImageProps {
  url: string;
}

export const Container = styled.div`
  position: relative;
  display: flex;
  background: #ebfaff;
  justify-content: center;
  align-items: flex-start;
  width: 100vw;
  height: 100vh;
`;
export const RectContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  filter: blur(3.5px);
  width: 100%;
  height: 400px;
`;
export const Rect1 = styled.div`
  height: 350px;
  width: 100%;
  bottom: 0;
  background: #515151;
  z-index: 1;
`;
export const Rect2 = styled.div`
  width: 100%;
  height: 50px;
  background: #e7e3dd;
  z-index: 2;
`;

export const ImageLandContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;

export const OnboardingImage = styled.img<OnboardingImageProps>`
  position: absolute;
  content: url(${(props) => props.url});
  width: 300px;

  height: 400px;
  z-index: 3;
  /* bottom: 300px; */
  vertical-align: bottom;

  height: 400px;
  z-index: 3;

  left: calc(50% - 150px);
  bottom: 370px;
`;
export const Message = styled.div`
  width: 340px;
  height: 180px;
  background: #f4f0eb;
  border-radius: 20px;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MessageText = styled.div`
  text-align: center;
  color: ${COLORS.grayscale.black};
  ${TEXT_STYLES.SubHead2};
  line-height: 160%;
`;

export const MessageContainer = styled.div`
  position: absolute;
  flex-direction: column;
  width: 100%;
  padding-bottom: 50px !important;
  padding: 25px;
  display: flex;
  align-items: center;
  bottom: 0;
  gap: 22px;
`;
