import * as styles from "./MainHeader.style";
import { ReactComponent as Logo } from "@/assets/logo.svg";

const MainHeader = () => {
  return (
    <styles.HeaderContainer>
      <styles.Header>
        <styles.LogoContainer>
          <Logo />
        </styles.LogoContainer>
      </styles.Header>
    </styles.HeaderContainer>
  );
};

export default MainHeader;
