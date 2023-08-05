import { ReactComponent as CurrentLocationIcon } from '@/assets/currentLocationIcon.svg';
import Loading from './Loading';
import useKakaoMap from '@/utils/useKakaoMap';

import * as styles from './MapContent.style';

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
