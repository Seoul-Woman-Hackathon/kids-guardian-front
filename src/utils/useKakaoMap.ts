import { useEffect, useRef, useState } from 'react';
import { SongpaDummy } from '../../dummydata';

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
        level: 2,
        scrollwheel: true,
      };
      const map = new kakao.maps.Map(mapContainer.current, mapOptions);

      // Map Marker
      const mapMarkerImage = new kakao.maps.MarkerImage(
        '/mapMarkerIcon.svg',
        new kakao.maps.Size(54, 64),
        { offset: new kakao.maps.Point(27, 69) },
      );
      const mapMarker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(latitude, longitude),
        image: mapMarkerImage,
      });

      mapMarker.setMap(map);

      // Songpa Accident Area Polygon
      //let polygonPaths = [];
      const SongpaData = SongpaDummy.items.item;
      SongpaData.forEach((item) => {
        const polygonCoords = item.geom_json.coordinates[0];
        const polygonPaths = polygonCoords.map(
          (coords) => new kakao.maps.LatLng(coords[1], coords[0]),
        );

        const polygon = new kakao.maps.Polygon({
          path: polygonPaths,
          strokeWeight: 3, // 선의 두께입니다
          strokeColor: '#39DE2A', // 선의 색깔입니다
          strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
          strokeStyle: 'solid', // 선의 스타일입니다
          fillColor: '#A2FF99', // 채우기 색깔입니다
          fillOpacity: 0.3, // 채우기 불투명도 입니다
        });

        polygon.setMap(map);
      });
    });
  }, [mapLoaded, latitude, longitude]);

  return mapContainer;
};

export default useKakaoMap;
