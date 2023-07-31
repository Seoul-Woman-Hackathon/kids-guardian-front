import { useCallback, useEffect, useRef, useState } from 'react';

interface GeolocationInfoType {
  loading: boolean;
  error: GeolocationPositionError | null;
  timestamp: number | null;
  latitude: number | null;
  longitude: number | null;
}

const useGeolocation = () => {
  const watchIdRef = useRef<number>(0);
  const optionsRef = useRef<PositionOptions>({
    /** 위치 정확도 (true면 더 정확한 위치를 제공하나 응답 속도 저하 및 전력 소모량 증가)*/
    enableHighAccuracy: true,
    /** 캐시에 지정한 위치 정보를 반환할 수 있는 최대 시간 */
    maximumAge: 0,
    /** 위치를 반환할 때 소모할 수 있는 최대 시간  */
    timeout: 5000,
  });

  const [geolocationInfo, setGelocationInfo] = useState<GeolocationInfoType>({
    loading: true,
    error: null,
    timestamp: null,
    latitude: null,
    longitude: null,
  });

  // 현재 좌표 추출에 성공했을 경우
  const onEventSuccess = ({ coords, timestamp }: GeolocationPosition) => {
    const { latitude, longitude } = coords;

    setGelocationInfo((prev) => ({
      ...prev,
      loading: false,
      latitude,
      longitude,
      timestamp,
    }));
  };

  // 현재 좌표 추출에 실패했을 경우
  const onEventError = useCallback((error: GeolocationPositionError) => {
    setGelocationInfo((prev) => ({
      ...prev,
      loading: false,
      error,
    }));
    alert(error.message);
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        onEventSuccess,
        onEventError,
        optionsRef.current,
      );

      watchIdRef.current = navigator.geolocation.watchPosition(
        onEventSuccess,
        onEventError,
        optionsRef.current,
      );
    }

    return navigator.geolocation.clearWatch(watchIdRef.current);
  }, [optionsRef.current]);

  return geolocationInfo;
};

export default useGeolocation;
