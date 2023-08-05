import { useState } from "react";
import * as styles from "./CrossWalkAlarm.style";
import CrossWalkLockAlarm from "../CrossWalkLockAlarm";
import { useRecoilValue } from "recoil";
import { accidentRegionAtom } from "@/states/accidentRegionAtom";

const CrossWalkAlarm = () => {
  const accidentRange = useRecoilValue(accidentRegionAtom);
  const [onClick, setOnClick] = useState(false);
  console.log(onClick);
  const onTouchStart = () => {
    setOnClick(true);
  };

  //   const onTouchEnd = () => {
  //     setTimeout(() => {
  //       setOnClick(false);
  //     }, 800);
  //   };

  return (
    <styles.Container onTouchStart={onTouchStart}>
      <styles.Message>
        <styles.MessageText>손을 번쩍 들어!</styles.MessageText>
      </styles.Message>
      <styles.Image />
      <styles.RectContainer>
        <styles.Rect />
      </styles.RectContainer>

      {onClick && accidentRange.in_accident_region ? (
        <CrossWalkLockAlarm />
      ) : null}
    </styles.Container>
  );
};
export default CrossWalkAlarm;
