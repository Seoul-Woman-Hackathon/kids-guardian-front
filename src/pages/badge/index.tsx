import { useSetRecoilState } from "recoil";
import { userNavAtom } from "@/states/userNavAtom";
import { IUserNavAtom } from "@/states/userNavAtom";
import { NAV_LIST } from "@/components/Common/Navbar/navigation";
import ALARM from "../../assets/gifImage/alarm2.gif";

const BadgePage = () => {
  const setNavAtom = useSetRecoilState(userNavAtom);
  const navState: IUserNavAtom = {
    activeNavType: NAV_LIST.BADGE,
  };
  setNavAtom(navState);

  return (
    <>
      <img src={ALARM} width={600} height={600}></img>
    </>
  );
};
export default BadgePage;
