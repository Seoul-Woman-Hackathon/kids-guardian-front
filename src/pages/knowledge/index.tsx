import { useSetRecoilState } from "recoil";
import { userNavAtom } from "@/states/userNavAtom";
import { IUserNavAtom } from "@/states/userNavAtom";
import { NAV_LIST } from "@/components/Common/Navbar/navigation";

const Knowledge = () => {
  const setNavAtom = useSetRecoilState(userNavAtom);
  const navState: IUserNavAtom = {
    activeNavType: NAV_LIST.KNOWLEDGE,
  };
  setNavAtom(navState);
  return <></>;
};
export default Knowledge;
