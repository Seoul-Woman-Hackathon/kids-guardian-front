import MapContent from '@/components/MapContent';
import { useSetRecoilState } from 'recoil';
import { userNavAtom } from '@/states/userNavAtom';
import { IUserNavAtom } from '@/states/userNavAtom';
import { NAV_LIST } from '@/components/Common/Navbar/navigation';
import { useEffect } from 'react';

const MainPage = () => {
  useEffect(() => {
    //getSeoulPolygonData();
  }, []);

  const setNavAtom = useSetRecoilState(userNavAtom);
  const navState: IUserNavAtom = {
    activeNavType: NAV_LIST.HOME,
  };
  setNavAtom(navState);

  return <MapContent />;
};

export default MainPage;
