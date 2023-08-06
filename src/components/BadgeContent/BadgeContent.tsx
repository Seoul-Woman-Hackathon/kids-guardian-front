import { useState } from 'react';
import { BADGE_INFO } from './badgeInfo';

import * as styles from './BadgeContent.style';

const BadgeContent = ({ count }: { count: number }) => {
  console.log(count);
  const [dressedBadge, setDressedBadge] = useState<number[]>([]);

  const onClickBadge = (idx: number) => {
    if (dressedBadge.includes(idx)) {
      setDressedBadge((prev) => prev.filter((badge) => badge !== idx));
    } else {
      setDressedBadge((prev) => [...prev, idx]);
    }
  };

  return (
    <styles.Wrapper>
      <styles.CharacterContainer>
        {dressedBadge.map((idx: number) => (
          <styles.BadgeImage src={BADGE_INFO[idx].image} idx={idx} />
        ))}

        <img
          src={
            dressedBadge.includes(3)
              ? 'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/turtleCat.svg'
              : 'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/Cat.svg'
          }
        />
      </styles.CharacterContainer>
      <styles.Line />
      <styles.SubTitle>내가 받은 배지</styles.SubTitle>
      <styles.BadgeList>
        {BADGE_INFO.map(({ name, image }, index: number) => (
          <styles.Badge key={name} onClick={() => onClickBadge(index)}>
            {dressedBadge.includes(index) && (
              <styles.DressedBackground>착용중</styles.DressedBackground>
            )}
            <styles.BadgeIconContainer>
              <img src={image} />
            </styles.BadgeIconContainer>
            <styles.BadgeTitle>{name}</styles.BadgeTitle>
          </styles.Badge>
        ))}
      </styles.BadgeList>
    </styles.Wrapper>
  );
};

export default BadgeContent;
