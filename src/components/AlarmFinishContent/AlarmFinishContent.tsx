import { ReactComponent as LockIcon } from '@/assets/icons/lockIcon.svg';

import * as styles from './AlarmFinishContent.style';
import { BADGE_INFO } from '../BadgeContent/badgeInfo';
import COLORS from '@styles/constants/colors';

interface AlarmFinishContentProps {
  count?: number;
}

const AlarmFinishContent = ({ count = 4 }: AlarmFinishContentProps) => {
  const mode = count !== 0 && count % 5 === 0 ? 'badge' : 'noBadge';
  const level = parseInt(`${count / 5}`) - 1;
  const remainCount = 5 - (count % 5);

  const TITLE = {
    badge: [
      '안전 규칙을 잘 지켜서',
      BADGE_INFO[level < 0 ? 0 : level].name,
      '배지를 받았어요',
    ],
    noBadge: [
      '너무 잘했어요!',
      `총 ${count}회의 안전 규칙을 지키면`,
      '배지를 받을 수 있어요.',
    ],
  };

  const BadgeIcon = BADGE_INFO[level < 0 ? 0 : level].icon;

  return (
    <styles.Wrapper>
      <styles.TitleWrapper>
        <styles.Title>{TITLE[mode][0]}</styles.Title>
        <styles.Title
          color={
            mode === 'badge' ? COLORS.main.secondary : COLORS.grayscale.black
          }
        >
          {TITLE[mode][1]}
        </styles.Title>
        <styles.Title>{TITLE[mode][2]}</styles.Title>
      </styles.TitleWrapper>
      {mode === 'badge' ? (
        <styles.BadgeContainer>
          <styles.BadgeIconWrapper>{<BadgeIcon />}</styles.BadgeIconWrapper>
        </styles.BadgeContainer>
      ) : (
        <styles.NoBadgeContainer>
          <LockIcon />
          <styles.CountText>남은 횟수 : {remainCount}회</styles.CountText>
          <styles.ProgressBarBackground>
            <styles.Bar count={remainCount} />
          </styles.ProgressBarBackground>
        </styles.NoBadgeContainer>
      )}
      <styles.Button>확인</styles.Button>
    </styles.Wrapper>
  );
};

export default AlarmFinishContent;
