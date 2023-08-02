import { ReactComponent as HomeOffIcon } from "@icons/Home/Home_off.svg";
import { ReactComponent as HomeOnIcon } from "@icons/Home/Home_on.svg";
import { ReactComponent as BadgeOffIcon } from "@icons/Badge/Badge_off.svg";
import { ReactComponent as BadgeOnIcon } from "@icons/Badge/Badge_on.svg";
import { ReactComponent as KnowledgeOffIcon } from "@icons/Info/Info_off.svg";
import { ReactComponent as KnowledgeONIcon } from "@icons/Info/Info_on.svg";
import { ReactComponent as MyPageIcon } from "@icons/Profile/Profile.svg";
import { NAV_LIST, NAV_URL_LIST } from "@/components/Common/Navbar/navigation";

interface NavItemType {
  label: string;
  url: (typeof NAV_URL_LIST)[keyof typeof NAV_URL_LIST]; // NAV_URL_LIST의 value들을 상수처럼 쓰고 싶을 때 이렇게 사용
  icon: {
    active: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    default: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  };
}

export const NAV_INFO = {
  [NAV_LIST.HOME]: {
    label: "홈",
    url: NAV_URL_LIST.HOME,
    icon: {
      active: HomeOnIcon,
      default: HomeOffIcon,
    },
  },
  [NAV_LIST.BADGE]: {
    label: "뱃지",
    url: NAV_URL_LIST.BADGE,
    icon: {
      active: BadgeOnIcon,
      default: BadgeOffIcon,
    },
  },
  [NAV_LIST.KNOWLEDGE]: {
    label: "안전 지식",
    url: NAV_URL_LIST.KNOWLEDGE,
    icon: {
      active: KnowledgeONIcon,
      default: KnowledgeOffIcon,
    },
  },
  [NAV_LIST.MY_PAGE]: {
    label: "마이 페이지",
    url: NAV_URL_LIST.MY_PAGE,
    icon: {
      active: MyPageIcon,
      default: MyPageIcon,
    },
  },
} as const satisfies Record<
  (typeof NAV_LIST)[keyof typeof NAV_LIST],
  NavItemType
>;
