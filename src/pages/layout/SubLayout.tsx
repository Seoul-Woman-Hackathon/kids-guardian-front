import { PropsWithChildren } from "react";
import * as styles from "./layout.style";
import NavigationBar from "@/components/Common/Navbar";
import { Outlet } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { userNavAtom } from "@/states/userNavAtom";
import SubHeader from "@/components/Common/Header/SubHeader";
import TestPage from "../test/TestPage";

const SubLayout = ({ children }: PropsWithChildren) => {
  const activeNavType = useRecoilValue(userNavAtom).activeNavType;
  console.log(activeNavType);
  return (
    <>
      <SubHeader title={activeNavType} />
      <TestPage />

      <styles.NavBarWrapper>
        <NavigationBar focusType={activeNavType} />
      </styles.NavBarWrapper>
    </>
  );
};
export default SubLayout;
