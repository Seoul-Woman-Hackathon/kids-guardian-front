import COLORS from '@styles/constants/colors';

import styled from '@emotion/styled';
import ALARM from '../../assets/gifImage/alarm2.gif';
import AlarmFinishContent from '@/components/AlarmFinishContent';
const TestPage = () => (
  <>
    <AlarmFinishContent />
  </>
);

export default TestPage;

const Text = styled.div`
  color: ${COLORS.main.primary};
`;

const Text2 = styled.div``;
