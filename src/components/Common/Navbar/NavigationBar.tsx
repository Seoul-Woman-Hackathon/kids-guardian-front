import { NAV_LIST } from "@/components/Common/Navbar/navigation";
import * as styles from "./NavigationBar.style";
import NavItem from "./NavItem";

interface NavigationBarProps {
  focusType: keyof typeof NAV_LIST;
}

const NavigationBar = ({ focusType }: NavigationBarProps) => {
  return (
    <>
      <styles.Navigation>
        <NavItem type={NAV_LIST.HOME} isFocused={focusType === NAV_LIST.HOME} />
        <NavItem
          type={NAV_LIST.BADGE}
          isFocused={focusType === NAV_LIST.BADGE}
        />
        <NavItem
          type={NAV_LIST.KNOWLEDGE}
          isFocused={focusType === NAV_LIST.KNOWLEDGE}
        />
        <NavItem
          type={NAV_LIST.MY_PAGE}
          isFocused={focusType === NAV_LIST.MY_PAGE}
        />
      </styles.Navigation>
    </>
  );
};

export default NavigationBar;
