import { ReactComponent as CurrentLocationIcon } from '@/assets/currentLocationIcon.svg';
import useKakaoMap from '@/utils/useKakaoMap';

import * as styles from './MapContent.style';
import Loading from './Loading';

// 샘플 좌표 : 37.4963, 126.9569
const MapContent = () => {
  const { mapContainerRef, returnToPosition, isMapReady } = useKakaoMap();

  if (!isMapReady) {
    return <Loading />;
  }

  return (
    <>
      <styles.ReturnButton onClick={returnToPosition}>
        <CurrentLocationIcon />
        <styles.ButtonLabel>현 위치</styles.ButtonLabel>
      </styles.ReturnButton>
      <styles.MapContainer ref={mapContainerRef} />
    </>
  );
};

export default MapContent;
