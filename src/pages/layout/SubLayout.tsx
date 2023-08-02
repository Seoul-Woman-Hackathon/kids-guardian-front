import { PropsWithChildren } from "react";
import * as styles from "./layout.style";
import NavigationBar from "@/components/Common/Navbar";
import { useRecoilValue } from "recoil";
import { userNavAtom } from "@/states/userNavAtom";
import SubHeader from "@/components/Common/Header/SubHeader";
import { Outlet } from "react-router-dom";

import { NAV_INFO } from "@/components/Common/Navbar/NavInfo";
//{children || <Outlet />}  -> 이렇게 쓰면 children이 없을때도 Outlet을 사용하여 라우터에 의해 렌더링된 컴포넌트를 표시
const SubLayout = ({ children }: PropsWithChildren) => {
  const activeNavType = useRecoilValue(userNavAtom).activeNavType;
  console.log(activeNavType);

  return (
    <>
      <SubHeader title={NAV_INFO[activeNavType].label} />
      {children || <Outlet />}

      <styles.NavBarWrapper>
        <NavigationBar focusType={activeNavType} />
      </styles.NavBarWrapper>
    </>
  );
};
export default SubLayout;
