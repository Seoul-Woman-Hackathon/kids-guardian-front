import { PropsWithChildren } from "react";
import * as styles from "./layout.style";
import NavigationBar from "@/components/Common/Navbar";
import { Outlet } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { userNavAtom } from "@/states/userNavAtom";
import { ReactComponent as Logo } from "@/assets/logo.svg";
import MainHeader from "@/components/Common/Header/MainHeader";

const MainLayout = ({ children }: PropsWithChildren) => {
  const activeNavType = useRecoilValue(userNavAtom).activeNavType;
  console.log(activeNavType);
  return (
    <>
      <MainHeader />
      {children || <Outlet />}
      <styles.NavBarWrapper>
        <NavigationBar focusType={activeNavType} />
      </styles.NavBarWrapper>
    </>
  );
};
export default MainLayout;
