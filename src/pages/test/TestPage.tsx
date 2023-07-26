import { COLORS } from "../../assets/styles/constants/colors";
import { TEXT_STYLES } from "../../assets/styles/constants/textStyles";
import styled from "@emotion/styled";
import Home from "../../assets/styles/icons/Home/Home_off.svg";

const TestPage = () => (
  <>
    <Text>서비스를 사용하는 동안 항상 허용</Text>
    <img src={Home}></img>
    <Text2>키즈 가디언이 아이들에게 알림을 줄 수 있도록 허용해주세요</Text2>
  </>
);

export default TestPage;

const Text = styled.div`
  color: ${COLORS.main.primary};
  ${TEXT_STYLES.TEST}
`;

const Text2 = styled.div`
  ${TEXT_STYLES.TEST2}
`;
