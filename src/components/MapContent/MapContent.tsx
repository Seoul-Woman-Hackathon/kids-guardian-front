import useGeolocation from '@/utils/useGeolocation';
import * as styles from './MapContent.style';
import useKakaoMap from '@/utils/useKakaoMap';

const MapContent = () => {
  const { latitude, longitude } = useGeolocation();
  console.log(latitude, longitude);

  const { mapContainerRef: mapRef, resetPosition } = useKakaoMap(
    37.511776,
    127.08368172,
  );

  return (
    <>
      <button onClick={resetPosition}>현위치</button>
      <styles.MapContainer ref={mapRef} />
    </>
  );
};

export default MapContent;
