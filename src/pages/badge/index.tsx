import { useSetRecoilState } from 'recoil';
import { userNavAtom } from '@/states/userNavAtom';
import { IUserNavAtom } from '@/states/userNavAtom';
import { NAV_LIST } from '@/components/Common/Navbar/navigation';
import BadgeContent from '@/components/BadgeContent';

const BadgePage = () => {
  const setNavAtom = useSetRecoilState(userNavAtom);
  const navState: IUserNavAtom = {
    activeNavType: NAV_LIST.BADGE,
  };
  setNavAtom(navState);

  return <BadgeContent count={4} />;
};
export default BadgePage;
