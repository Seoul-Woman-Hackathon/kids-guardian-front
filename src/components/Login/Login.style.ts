import styled from "@emotion/styled";
import TEXT_STYLES from "@styles/constants/textStyles";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 51px;
`;

export const Logo = styled.div`
  width: 200px;
  height: 150px;
  margin-top: 100px;
  background-size: cover;
  background-image: url("https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/Logo_final.svg");
`;
export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 14px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
`;
