import { NAV_INFO } from "@/components/Common/Navbar/NavInfo";
import { NAV_LIST } from "@/components/Common/Navbar/navigation";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

type NavListType = keyof typeof NAV_INFO;

export interface IUserNavAtom {
  activeNavType: NavListType;
}

const { persistAtom } = recoilPersist({
  key: "navLocalStorage", //원하는 key 값 입력
  storage: localStorage,
});

export const userNavAtom = atom<IUserNavAtom>({
  key: "userNavAtom",
  default: {
    activeNavType: NAV_LIST.HOME,
  },
  effects_UNSTABLE: [persistAtom],
});

// 여기서 selector 쓰는게 나을지
