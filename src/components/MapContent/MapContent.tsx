import useGeolocation from "@/utils/useGeolocation";
import * as styles from "./MapContent.style";
import useKakaoMap from "@/utils/useKakaoMap";
import { useSetRecoilState } from "recoil";
import { IUserNavAtom, userNavAtom } from "@/states/userNavAtom";

import { NAV_LIST } from "../Common/Navbar/navigation";

const MapContent = () => {
  const setNavAtom = useSetRecoilState(userNavAtom);
  const navState: IUserNavAtom = {
    isNavBarVisible: true,
    activeNavType: NAV_LIST.HOME,
  };
  setNavAtom(navState);

  const { latitude, longitude } = useGeolocation();
  console.log(latitude, longitude);

  const mapContainerRef = useKakaoMap(37.511776, 127.08368172);

  return (
    <>
      {/*<button onClick={resetPosition}>현위치</button>*/}
      <styles.MapContainer ref={mapContainerRef} />
    </>
  );
};

export default MapContent;
