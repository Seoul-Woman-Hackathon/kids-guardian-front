import * as styles from './CrossWalkLockAlarm.style';

const CrossWalkLockAlarm = () => {
  return (
    <styles.ModalBg>
      <styles.LockContainer>
        <styles.LockComponent>
          <styles.LockText>화면잠금</styles.LockText>
          <styles.LockImage />
        </styles.LockComponent>
      </styles.LockContainer>
    </styles.ModalBg>
  );
};

export default CrossWalkLockAlarm;
