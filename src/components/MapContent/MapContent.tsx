import useGeolocation from '@/utils/useGeolocation';
import * as styles from './MapContent.style';
import useKakaoMap from '@/utils/useKakaoMap';

const MapContent = () => {
  const [latitude, longitude] = useGeolocation();
  const mapRef = useKakaoMap(latitude, longitude);

  return <styles.MapContainer ref={mapRef} />;
};

export default MapContent;
