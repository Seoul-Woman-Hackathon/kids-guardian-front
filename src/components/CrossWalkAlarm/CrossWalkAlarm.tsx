import { useEffect, useState } from 'react';
import * as styles from './CrossWalkAlarm.style';
import { useRecoilValue } from 'recoil';
import { crossWalkAtom } from '@/states/accidentRegionAtom';
import CrossWalkLockAlarm from '../CrossWalkLockAlarm';

const CrossWalkAlarm = () => {
  const [startBlockingClick, setStartBlockingClick] = useState(false);
  const { isNearCrossWalk } = useRecoilValue(crossWalkAtom);

  const onTouchStart = () => {
    setStartBlockingClick(true);
    console.log('??');
  };

  useEffect(() => {
    if (!isNearCrossWalk) {
      setStartBlockingClick(false);
    }
  }, [isNearCrossWalk]);

  return (
    <styles.Container onClick={onTouchStart}>
      <styles.Message>
        <styles.MessageText>손을 번쩍 들어!</styles.MessageText>
      </styles.Message>
      <styles.Image />
      <styles.RectContainer>
        <styles.Rect />
      </styles.RectContainer>

      {startBlockingClick && <CrossWalkLockAlarm />}
    </styles.Container>
  );
};
export default CrossWalkAlarm;
