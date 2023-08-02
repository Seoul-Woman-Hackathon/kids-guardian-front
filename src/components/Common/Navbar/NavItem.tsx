import { NAV_INFO } from "./NavInfo";
import * as styles from "./NavigationBar.style";
import { Link } from "react-router-dom";

type NavListType = keyof typeof NAV_INFO;

interface NavItemProps {
  type: NavListType;
  isFocused?: boolean;
}

const NavItem = ({ type, isFocused }: NavItemProps) => {
  const { url, icon: Icon } = NAV_INFO[type];

  return (
    <styles.IconContainer>
      <Link to={url}>{isFocused ? <Icon.active /> : <Icon.default />}</Link>
    </styles.IconContainer>
  );
};

export default NavItem;
