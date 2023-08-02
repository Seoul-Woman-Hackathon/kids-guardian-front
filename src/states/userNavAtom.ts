import { NAV_INFO } from "@/components/Common/Navbar/NavInfo";
import { NAV_LIST } from "@/components/Common/Navbar/navigation";
import { atom, selector } from "recoil";

type NavListType = keyof typeof NAV_INFO;

export interface IUserNavAtom {
  isNavBarVisible: boolean;
  activeNavType: NavListType;
}

export const userNavAtom = atom<IUserNavAtom>({
  key: "userNavAtom",
  default: {
    isNavBarVisible: true,
    activeNavType: NAV_LIST.HOME,
  },
});

// 여기서 selector 쓰는게 나을지
