import { useState } from "react";
import * as styles from "./CrossWalkAlarm.style";
import CrossWalkLockAlarm from "../CrossWalkLockAlarm";

const CrossWalkAlarm = () => {
  const [onClick, setOnClick] = useState(true);
  return (
    <styles.Container>
      <styles.Message>
        <styles.MessageText>손을 번쩍 들어!</styles.MessageText>
      </styles.Message>
      <styles.Image />
      <styles.RectContainer>
        <styles.Rect />
      </styles.RectContainer>
      {onClick ? <CrossWalkLockAlarm /> : null}
    </styles.Container>
  );
};
export default CrossWalkAlarm;
