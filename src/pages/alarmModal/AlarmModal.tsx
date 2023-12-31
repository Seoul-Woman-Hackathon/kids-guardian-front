import { useEffect, useState } from "react";
import { accidentRegionAtom, crossWalkAtom } from "@/states/accidentRegionAtom";
import { useRecoilValue } from "recoil";

import * as styles from "./AlarmModal.style";
import CrossWalkAlarm from "@/components/CrossWalkAlarm";
import AlarmPreview from "@/components/AlarmPreview";
import AlarmFinishContent from "@/components/AlarmFinishContent";

const AlarmModal = () => {
  const { in_accident_region } = useRecoilValue(accidentRegionAtom);
  const { isNearCrossWalk } = useRecoilValue(crossWalkAtom);

  const [isShowAlarmPreview, setIsShowAlarmPreview] = useState(false);
  const [isShowCrossWalkAlarm, setIsShowCrossWalkAlarm] = useState(false);
  const [isShowAlarmFinish, setIsShowAlarmFinish] = useState(false);

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
    let tId: number;
    if (isNearCrossWalk) {
      setIsShowCrossWalkAlarm(true);
    } else {
      setIsShowCrossWalkAlarm(false);
      tId = setTimeout(() => {
        setIsShowAlarmFinish(false);
      }, 3000);
    }
    return () => clearTimeout(tId);
  }, [isNearCrossWalk]);

  useEffect(() => {
    let tId: number;

    if (isShowCrossWalkAlarm && !isShowAlarmFinish) {
      setIsShowAlarmFinish(true);

      tId = setTimeout(() => {
        setIsShowAlarmFinish(false);
      }, 3000);
    }
    return () => clearTimeout(tId);
  }, [isShowCrossWalkAlarm]);

  return isShowAlarmPreview ? (
    <styles.Modal>
      <AlarmPreview />
    </styles.Modal>
  ) : isShowCrossWalkAlarm ? (
    <styles.Modal>
      <CrossWalkAlarm />
    </styles.Modal>
  ) : isShowAlarmFinish ? (
    <styles.Modal>
      <AlarmFinishContent />
    </styles.Modal>
  ) : (
    <></>
  );
};

export default AlarmModal;
