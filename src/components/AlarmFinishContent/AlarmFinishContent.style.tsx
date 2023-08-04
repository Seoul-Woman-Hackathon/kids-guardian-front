import styled from '@emotion/styled';
import COLORS from '@styles/constants/colors';
import TEXT_STYLES from '@styles/constants/textStyles';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${COLORS.grayscale.white};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;
`;

export const Title = styled.div`
  ${TEXT_STYLES.H5};
  color: ${(props) => props.color};
`;

export const CountText = styled.div`
  ${TEXT_STYLES.H4};
  margin-top: 50px;
`;

export const ProgressBarBackground = styled.div`
  width: 300px;
  height: 45px;
  background-color: #fefbf2;
  border-radius: 30px;
  padding: 4px;
  position: relative;
  box-shadow: 2px 2px 4px rgba(111, 111, 111, 0.25);
  margin-top: 10px;
`;

export const Bar = styled.div`
  width: ${(props: { count: number }) => (5 - props.count) * 20}%;
  height: 38px;
  background-color: ${COLORS.grayscale.gray200};
  border-radius: 30px;
  position: absolute;
  left: 4px;
`;

export const Button = styled.button`
  ${TEXT_STYLES.Button1};
  width: 315px;
  height: 45px;
  background-color: ${COLORS.main.secondary};
  color: ${COLORS.grayscale.white};
  border-radius: 14px;
  border: none;
`;

export const BadgeName = styled.span`
  color: ${COLORS.main.secondary};
`;

export const NoBadgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BadgeContainer = styled.div`
  width: 280px;
  height: 280px;
  border-radius: 140px;
  margin: 20px 0px;
  background: rgba(255, 209, 45, 0.3);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BadgeIconWrapper = styled.div`
  width: 250px;
  height: 250px;
`;
