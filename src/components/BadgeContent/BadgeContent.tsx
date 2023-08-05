import { useState } from 'react';
import { BADGE_INFO } from './badgeInfo';

import * as styles from './BadgeContent.style';

const BadgeContent = ({ count }: { count: number }) => {
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
        <img src={'src/assets/character.png'} />
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
