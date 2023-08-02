import { useSetRecoilState } from "recoil";
import { userNavAtom } from "@/states/userNavAtom";
import { IUserNavAtom } from "@/states/userNavAtom";
import { NAV_LIST } from "@/components/Common/Navbar/navigation";

const MyPage = () => {
  const setNavAtom = useSetRecoilState(userNavAtom);
  const navState: IUserNavAtom = {
    activeNavType: NAV_LIST.MY_PAGE,
  };
  setNavAtom(navState);

  return <></>;
};
export default MyPage;
