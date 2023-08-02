import COLORS from "@styles/constants/colors";

import styled from "@emotion/styled";
import ALARM from "../../assets/gifImage/alarm2.gif";
const TestPage = () => (
  <>
    <Text>서비스를 사용하는 동안 항상 허용</Text>
    <img src={ALARM} width={500} height={500}></img>
    <Text2>키즈 가디언이 아이들에게 알림을 줄 수 있도록 허용해주세요</Text2>
  </>
);

export default TestPage;

const Text = styled.div`
  color: ${COLORS.main.primary};
`;

const Text2 = styled.div``;
