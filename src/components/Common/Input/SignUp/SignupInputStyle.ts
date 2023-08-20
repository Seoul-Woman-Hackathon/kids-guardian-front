import styled from "@emotion/styled";
import TEXT_STYLES from "@styles/constants/textStyles";

export const Input = styled.input`
  position: relative;
  width: 340px;
  height: 60px;
  border: none;
  border-radius: 10px;
  background: #f0eeeb;
  outline: none;
  padding: 20px;
  &::placeholder {
    ${TEXT_STYLES.Body1}
    color:#8F8C88;
  }
`;
export const ClickedInput = styled.input`
  position: relative;
  width: 340px;
  height: 60px;
  background: #fefbf2;
  border: none;
  border-radius: 10px;
  outline: none;
  padding: 20px;
  &::placeholder {
    ${TEXT_STYLES.Body1}
    color:#8F8C88;
  }
`;

export const CancelWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  gap: 8x;
  padding-right: 10px;
  background: #f0eeeb;
  border-radius: 10px;
`;
export const ClickContainer = styled.div`
  display: flex;
  gap: 8x;
  padding-right: 10px;
  background: #fefbf2;
  border-radius: 10px;
`;
