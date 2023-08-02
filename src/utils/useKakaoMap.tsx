import { useCallback, useEffect, useRef, useState } from 'react';
import useGeolocation from './useGeolocation';
import isLocatedNearCrossWalk from './handleCrossWalksData';
import { clusterStyles, polygonStyles } from '../styles/map.style';

import { DongjackDummy } from '@/DongjackDummyData';

const useKakaoMap = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapRef = useRef<typeof window.kakao.maps.Map>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const { kakao } = window as any;

  // 디바이스의 현재 좌표
  const { latitude, longitude, isLoaded: positionLoaded } = useGeolocation();

  // 1. Map 생성하기
  const createMap = () => {
    const mapOptions = {
      center: new kakao.maps.LatLng(latitude, longitude),
      level: 4,
      scrollwheel: true,
    };
    const map = new kakao.maps.Map(mapContainerRef.current, mapOptions);

    map.setMaxLevel(8);
    mapRef.current = map;
  };

  // 2. 현재 유저 위치에 표시할 마커 생성하기
  const updateUserMarker = useCallback(() => {
    const markerImage = new kakao.maps.MarkerImage(
      '/userMarkerIcon.svg',
      new kakao.maps.Size(54, 64),
      { offset: new kakao.maps.Point(27, 69) },
    );
    const markerPosition = new kakao.maps.LatLng(latitude, longitude);
    const marker = new kakao.maps.Marker({
      map: mapRef.current,
      position: markerPosition,
      image: markerImage,
    });

    mapRef.current.setCenter(markerPosition);

    return marker;
  }, [latitude, longitude]);

  // 3. 사고다발지역 중심 좌표을 클러스터링하기 위한 Clusterer 생성하기
  const createClusterer = useCallback(() => {
    const clusterer = new kakao.maps.MarkerClusterer({
      map: mapRef.current,
      averageCenter: true,
      disableClickZoom: true,
      minLevel: 4,
      gridSize: 80,
      styles: [clusterStyles],
    });

    return clusterer;
  }, [mapRef.current]);

  // 4. 사고다발지역 중심 좌표 추출 후 Cluster에 추가하기
  const addMarkersToClusterer = useCallback(
    (clusterer: any, coordsList: Array<Array<number>>) => {
      const accentAreaCenterImage = new kakao.maps.MarkerImage(
        '/warningIcon.png',
        new kakao.maps.Size(48, 44),
        { offset: new kakao.maps.Point(24, 22) },
      );

      const accentAreaCenterMarkers = coordsList.map((coords) => {
        const marker = new kakao.maps.Marker({
          position: new kakao.maps.LatLng(coords[0], coords[1]),
          image: accentAreaCenterImage,
        });
        return marker;
      });

      clusterer.addMarkers(accentAreaCenterMarkers);
    },
    [mapRef.current],
  );

  // 5. 사고다발지역의 영역을 Polygon 형태로 보여주기
  const createPolygon = useCallback(
    (polygonCoords: Array<Array<number>>) => {
      const polygonPaths = polygonCoords.map(
        (coords: Array<number>) => new kakao.maps.LatLng(coords[1], coords[0]),
      );
      const polygon = new kakao.maps.Polygon({
        path: polygonPaths,
        ...polygonStyles,
      });

      return polygon;
    },
    [mapRef.current],
  );

  // 6. 스크롤 감지 후 특정 level부터는 Polygon 숨김
  const handlePolygonVisible = useCallback(
    (polygon: any) => {
      kakao.maps.event.addListener(mapRef.current, 'zoom_changed', () => {
        polygon.setMap(mapRef.current.getLevel() >= 4 ? null : mapRef.current);
      });
    },
    [mapRef.current],
  );

  // 7. 현재 위치로 돌아오기
  const returnToPosition = useCallback(() => {
    mapRef.current.panTo(new kakao.maps.LatLng(latitude, longitude));
  }, [latitude, longitude]);

  useEffect(() => {
    window.kakao.maps.load(() => setMapLoaded(true));
  }, []);

  /** 지도와 사용자 위치 정보를 모두 호출 성공하면 최초로 한번 실행하는 부분 */
  useEffect(() => {
    if (!mapLoaded || !positionLoaded) return;

    createMap();

    const clusterer = createClusterer();
    const accidentAreaCenterList: Array<Array<number>> = [];

    DongjackDummy.items.item.forEach((item: any) => {
      const accidentAreaCenterCoords = [
        Number(item.la_crd),
        Number(item.lo_crd),
      ];
      accidentAreaCenterList.push(accidentAreaCenterCoords);

      const polygonCoords = item.geom_json.coordinates[0];
      const polygon = createPolygon(polygonCoords);
      handlePolygonVisible(polygon);
    });

    addMarkersToClusterer(clusterer, accidentAreaCenterList);
  }, [mapLoaded, positionLoaded]);

  /** 사용자 좌표가 업데이트 될 떄마다 실행할 부분 */
  useEffect(() => {
    if (!mapLoaded || !positionLoaded) return;

    const userMarker = updateUserMarker();

    //alert(latitude, longitude);

    /** 사용자가 폴리곤 내 진입 시 횡단보도 추적 시작  */
    if (isLocatedNearCrossWalk(latitude, longitude)) {
      // 횡단보도 알림
      alert('횡단보도 찾음');
    }

    return () => {
      // 사용자 좌표가 업데이트 되면 이전에 찍혀 있었던 마커는 제거
      userMarker.setMap(null);
    };
  }, [mapLoaded, latitude, longitude]);

  return {
    mapContainerRef,
    returnToPosition,
    isMapReady: mapLoaded && positionLoaded,
  };
};

export default useKakaoMap;
