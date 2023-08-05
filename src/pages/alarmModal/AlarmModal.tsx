import AlarmPreview from '@/components/AlarmPreview';
import { accidentRegionAtom, crossWalkAtom } from '@/states/accidentRegionAtom';
import { useRecoilValue } from 'recoil';

import * as styles from './AlarmModal.style';
import { useEffect, useState } from 'react';
import CrossWalkAlarm from '@/components/CrossWalkAlarm';

const AlarmModal = () => {
  const { in_accident_region } = useRecoilValue(accidentRegionAtom);
  const { isNearCrossWalk } = useRecoilValue(crossWalkAtom);

  const [isShowAlarmPreview, setIsShowAlarmPreview] = useState(false);
  const [isShowCrossWalkAlarm, setIsShowCrossWalkAlarm] = useState(false);

  console.log(isShowAlarmPreview, isShowCrossWalkAlarm);

  useEffect(() => {
    let timeoutId: number;

    if (in_accident_region) {
      setIsShowAlarmPreview(true);

      timeoutId = setTimeout(() => {
        setIsShowAlarmPreview(false);
      }, 3000);
    }
    return () => clearTimeout(timeoutId);
  }, [in_accident_region]);

  useEffect(() => {
    if (isNearCrossWalk) {
      setIsShowCrossWalkAlarm(true);
    }
  }, [isNearCrossWalk]);

  return isShowAlarmPreview ? (
    <styles.Modal>
      <AlarmPreview />
    </styles.Modal>
  ) : isShowCrossWalkAlarm ? (
    <styles.Modal>
      <CrossWalkAlarm />
    </styles.Modal>
  ) : (
    <></>
  );
};

export default AlarmModal;
