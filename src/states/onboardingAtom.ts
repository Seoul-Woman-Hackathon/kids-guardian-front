import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

interface onboardingAtom {
  isOnboarding: boolean;
}

const { persistAtom } = recoilPersist({
  key: "localStorage", //원하는 key 값 입력
  storage: localStorage,
});

export const onboardingAtom = atom<onboardingAtom>({
  key: "onboardingAtom",
  default: {
    isOnboarding: true,
  },
  effects_UNSTABLE: [persistAtom],
});
