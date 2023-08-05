interface BadgeInfoType {
  name: string;
  image: string;
}

export const BADGE_INFO: BadgeInfoType[] = [
  {
    name: '1. 안전의 시작',
    image: 'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/safehat.svg',
  },
  {
    name: '2. 좌우 살피는 미어켓',
    image: 'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/meerkat.svg',
  },
  {
    name: '3. 손 들고 건너기',
    image: 'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/balloon.svg',
  },
  {
    name: '4. 천천히 건너기',
    image: 'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/turtle.svg',
  },
  {
    name: '5. 신호등 살피기',
    image:
      'https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/sunglass.svg',
  },
];

export const BADGE_STYLE = [
  {
    transform: 'rotate(-10.003deg)',
    top: 15,
    left: 86,
  },
  {
    transform: 'rotate(-7.262deg)',
    top: 196,
    left: 150,
    width: 48,
    heigt: 48,
  },
  {
    transform: 'rotate(-24.36deg)',
    top: 134,
    left: 0,
    width: 157,
    heigt: 157,
  },
  {
    transform: 'rotate(-24.288deg)',
    //top: 70,
    //left: 93,
  },
  {
    transform: 'rotate(-10.168deg)',
    top: 80,
    left: 100,
  },
];
