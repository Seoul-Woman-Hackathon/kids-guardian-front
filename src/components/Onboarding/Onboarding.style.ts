import styled from "@emotion/styled";
import COLORS from "@styles/constants/colors";
import TEXT_STYLES from "@styles/constants/textStyles";

interface OnboardingImageProps {
  url: string;
}

export const Container = styled.div`
  position: absolute;
  display: flex;
  background: #ebfaff;
  justify-content: center;
  align-items: center;
  width: 100%;
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
  position: absolute;
  height: 350px;
  width: 100%;
  bottom: 0;
  background: #515151;
  z-index: 1;
`;
export const Rect2 = styled.div`
  position: absolute;
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
  position: relative;
  content: url(${(props) => props.url});
  width: 300px;
  height: 500px;
  z-index: 3;
  @media (min-width: 320px) {
    bottom: 220px;
  }
  @media (min-width: 375px) {
    bottom: 150px;
  }
  @media (min-width: 390px) {
    bottom: -20px;
  }

  @media (min-width: 414px) {
    /* bottom: -80px; */
    bottom: 90px;
  }
  @media (min-width: 694px) {
    bottom: 60px;
  }

  @media (min-width: 1024px) {
    bottom: -200px;
  }
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
