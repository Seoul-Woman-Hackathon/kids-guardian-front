import styled from '@emotion/styled';
import COLORS from '@styles/constants/colors';
import TEXT_STYLES from '@styles/constants/textStyles';
import { BADGE_STYLE } from './badgeInfo';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 120px;
`;

export const CharacterContainer = styled.div`
  width: 350px;
  height: 350px;
  background-color: ${COLORS.navi_bg};
  border: 1px solid ${COLORS.grayscale.gray100};
  border-radius: 21px;
  margin-top: 97px;
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`;

export const Line = styled.div`
  width: 350px;
  height: 1.5px;
  background-color: ${COLORS.grayscale.gray100};
  margin-top: 20px;
`;

export const SubTitle = styled.div`
  ${TEXT_STYLES.H5};
  color: ${COLORS.grayscale.black};
  margin-top: 40px;
`;

export const BadgeList = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  margin-top: 28px;
`;

export const Badge = styled.div`
  margin: 12px 15px;
  position: relative;
`;

export const DressedBackground = styled.div`
  ${TEXT_STYLES.Body1};
  border-radius: 20px;
  border: 2px solid ${COLORS.main.secondary};
  background-color: rgba(255, 209, 45, 0.5);
  width: 140px;
  height: 140px;
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BadgeIconContainer = styled.div`
  width: 140px;
  height: 140px;
  background-color: ${COLORS.navi_bg};
  border: 2px solid ${COLORS.grayscale.gray100};
  border-radius: 21px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BadgeTitle = styled.div`
  ${TEXT_STYLES.Body1};
  color: ${COLORS.grayscale.black};
  margin-top: 10px;
`;

export const BadgeImage = styled.img(
  ({ src, idx }: { src: string; idx: number }) => ({
    ...BADGE_STYLE[idx],
    position: 'absolute',
  }),
);
