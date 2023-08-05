interface OnboardingInfoType {
  step: number;
  image: string;
  messageText: string;
  buttonLabel: string;
}

export const ONBOARDING_INFO: OnboardingInfoType[] = [
  {
    step: 0,
    image:
      "https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/onboarding1.svg",
    messageText: "안녕하세요.  저는 키즈 가디언이에요! 만나서 반가워요!",
    buttonLabel: "반가워",
  },
  {
    step: 1,
    image:
      "https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/onboarding2.svg",
    messageText:
      "아이들의 안전을 지키기 위해 지구에 왔어요! 매년 아이들이 도로를 건널 때 가장 많이 위험에 처한다는 사실을 알고 계신가요?",
    buttonLabel: "정말?",
  },
  {
    step: 0,
    image:
      "https://jungminbuckets.s3.ap-northeast-2.amazonaws.com/onboarding3.svg",
    messageText:
      "그래서 제가 아이들의 안전을 지켜주기 위해 사고다발 구간에 진입하기 전에 알림을 줄게요!",
    buttonLabel: "알겠어",
  },
];
