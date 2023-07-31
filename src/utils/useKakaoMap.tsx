import { useEffect, useRef, useState } from 'react';
import { SongpaDummy } from '../../dummydata';
import { clusterStyles, polygonStyles } from './map.style';

const useKakaoMap = (latitude: number | null, longitude: number | null) => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapLevel, setMapLevel] = useState(2);

  const kakaoRef: any = useRef(window.kakao);
  const mapRef: any = useRef(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  // kakao map script load
  useEffect(() => {
    const $script = document.createElement('script');
    $script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${
      import.meta.env.VITE_KAKAO_APP_KEY
    }&autoload=false&libraries=services,clusterer`;
    $script.addEventListener('load', () => setMapLoaded(true));
    document.head.appendChild($script);

    kakaoRef.current = window.kakao;
  }, []);

  // 1. Map 생성하기
  const createMap = () => {
    console.log(kakaoRef);
    const mapOptions = {
      center: new kakaoRef.current.maps.LatLng(latitude, longitude),
      level: mapLevel, // default level
      scrollwheel: true,
    };
    const map = new kakaoRef.current.maps.Map(
      mapContainerRef.current,
      mapOptions,
    );

    mapRef.current = map;
  };

  // 2. 현재 유저 위치에 표시할 마커 생성하기
  const createUserMarker = () => {
    const markerImage = new kakaoRef.current.maps.MarkerImage(
      '/userMarkerIcon.svg',
      new kakaoRef.current.maps.Size(54, 64),
      { offset: new kakaoRef.current.maps.Point(27, 69) },
    );
    const marker = new kakaoRef.current.maps.Marker({
      position: new kakaoRef.current.maps.LatLng(latitude, longitude),
      image: markerImage,
    });
    marker.setMap(mapRef.current);
  };

  // 3. 사고다발지역 중심 좌표을 클러스터링하기 위한 Clusterer 생성하기
  const createClusterer = () => {
    const clusterer = new kakaoRef.current.maps.MarkerClusterer({
      map: mapRef.current,
      averageCenter: true,
      disableClickZoom: true,
      minLevel: 5,
      gridSize: 80,
      styles: [clusterStyles],
    });
    return clusterer;
  };

  // 4. 사고다발지역 중심 좌표 추출 후 Cluster에 추가하기
  const addMarkerToClusterer = (
    clusterer: any,
    latitude: number,
    longitud: number,
  ) => {
    const accentAreaCenterImage = new kakaoRef.current.maps.MarkerImage(
      '/warningIcon.png',
      new kakaoRef.current.maps.Size(48, 44),
      { offset: new kakaoRef.current.maps.Point(24, 22) },
    );
    const marker = new kakaoRef.current.maps.Marker({
      position: new kakaoRef.current.maps.LatLng(latitude, longitud),
      image: accentAreaCenterImage,
    });
    clusterer.addMarker(marker);
  };

  // 5. 사고다발지역의 영역을 Polygon 형태로 보여주기
  const createPolygon = (polygonCoords: any) => {
    const polygonPaths = polygonCoords.map(
      (coords: any) => new kakaoRef.current.maps.LatLng(coords[1], coords[0]),
    );
    const polygon = new kakaoRef.current.maps.Polygon({
      path: polygonPaths,
      ...polygonStyles,
    });

    return polygon;
  };

  // kakao map load
  useEffect(() => {
    if (!mapLoaded || !latitude || !longitude) return;

    window.kakao.maps.load(() => {
      kakaoRef.current = window.kakao;
      createMap();
      createUserMarker();

      const accidentClusterer = createClusterer();
      SongpaDummy.items.item.forEach((item) => {
        const accidentAreaCenterCoords = [
          Number(item.la_crd),
          Number(item.lo_crd),
        ];

        addMarkerToClusterer(
          accidentClusterer,
          accidentAreaCenterCoords[0],
          accidentAreaCenterCoords[1],
        );

        const polygonCoords = item.geom_json.coordinates[0];
        const accidentAreaPolygon = createPolygon(polygonCoords);
        accidentAreaPolygon.setMap(mapLevel >= 5 ? null : mapRef.current);
      });

      window.kakao.maps.event.addListener(
        mapRef.current,
        'zoom_changed',
        () => {
          setMapLevel(mapRef.current.getLevel());
        },
      );
    });
  }, [mapLoaded, latitude, longitude, mapLevel, kakaoRef.current]);

  return mapContainerRef;
};

export default useKakaoMap;
