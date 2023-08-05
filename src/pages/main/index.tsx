import MapContent from "@/components/MapContent";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userNavAtom } from "@/states/userNavAtom";
import { IUserNavAtom } from "@/states/userNavAtom";
import { NAV_LIST } from "@/components/Common/Navbar/navigation";
import { onboardingAtom } from "@/states/onboardingAtom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const MainPage = () => {
  const onboarding = useRecoilValue(onboardingAtom);
  const navigate = useNavigate();
  const setNavAtom = useSetRecoilState(userNavAtom);
  const navState: IUserNavAtom = {
    activeNavType: NAV_LIST.HOME,
  };
  setNavAtom(navState);

  useEffect(() => {
    console.log(onboarding.isOnboarding);
    if (onboarding.isOnboarding) navigate("/onboarding");
  }, []);

  return <MapContent />;
};

export default MainPage;
