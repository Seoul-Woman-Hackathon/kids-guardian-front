import useGeolocation from '@/utils/useGeolocation';
import * as styles from './MapContent.style';
import useKakaoMap from '@/utils/useKakaoMap';

const MapContent = () => {
  const { loading, latitude, longitude } = useGeolocation();
  const mapRef = useKakaoMap(latitude, longitude);

  if (loading) {
    return <div>로딩 중입니다</div>;
  }

  return <styles.MapContainer ref={mapRef} />;
};

export default MapContent;
