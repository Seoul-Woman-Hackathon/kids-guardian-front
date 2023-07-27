import { useEffect, useRef, useState } from 'react';

const useKakaoMap = (latitude: number | null, longitude: number | null) => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapContainer = useRef(null);

  // kakao map script load
  useEffect(() => {
    const $script = document.createElement('script');
    $script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${
      import.meta.env.VITE_KAKAO_APP_KEY
    }&autoload=false`;
    $script.addEventListener('load', () => setMapLoaded(true));
    document.head.appendChild($script);
  }, []);

  // kakao map load
  useEffect(() => {
    if (!mapLoaded || !latitude || !longitude) return;

    const { kakao } = window;
    kakao.maps.load(() => {
      // Map Option
      const mapOptions = {
        center: new kakao.maps.LatLng(latitude, longitude),
        level: 1,
        scrollwheel: true,
      };
      const map = new kakao.maps.Map(mapContainer.current, mapOptions);

      // Map Marker
      const mapMarkerImage = new kakao.maps.MarkerImage(
        '../src/assets/mapMarkerIcon.svg',
        new kakao.maps.Size(54, 64),
        { offset: new kakao.maps.Point(27, 69) },
      );
      const mapMarker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(latitude, longitude),
        image: mapMarkerImage,
      });

      mapMarker.setMap(map);
    });
  }, [mapLoaded, latitude, longitude]);

  return mapContainer;
};

export default useKakaoMap;
