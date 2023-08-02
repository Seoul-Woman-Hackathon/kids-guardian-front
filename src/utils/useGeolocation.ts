import { useCallback, useEffect, useRef, useState } from 'react';

const options = {
  /** 위치 정확도 (true면 더 정확한 위치를 제공하나 응답 속도 저하 및 전력 소모량 증가)*/
  enableHighAccuracy: false,
  /** 캐시에 지정한 위치 정보를 반환할 수 있는 최대 시간 */
  maximumAge: Infinity,
  /** 위치를 반환할 때 소모할 수 있는 최대 시간  */
  timeout: 3000,
};

interface GeolocationInfoType {
  isLoaded: boolean;
  error: GeolocationPositionError | null;
  timestamp: number | null;
  latitude: number | null;
  longitude: number | null;
}

const useGeolocation = () => {
  //const intervalId = useRef<number>(0);
  const watchId = useRef<number | null>();

  const [geolocationInfo, setGelocationInfo] = useState<GeolocationInfoType>({
    isLoaded: false,
    error: null,
    timestamp: null,
    latitude: null,
    longitude: null,
  });

  // 현재 좌표 추출에 성공했을 경우
  const onEventSuccess = useCallback(
    ({ coords, timestamp }: GeolocationPosition) => {
      const { latitude, longitude } = coords;

      setGelocationInfo((prev) => ({
        ...prev,
        isLoaded: true,
        latitude,
        longitude,
        timestamp,
      }));
    },
    [],
  );

  // 현재 좌표 추출에 실패했을 경우
  const onEventError = useCallback((error: GeolocationPositionError) => {
    setGelocationInfo((prev) => ({
      ...prev,
      error,
    }));
    console.error(error.message);
  }, []);

  const clearWatch = () => {
    if (watchId.current) {
      navigator.geolocation.clearWatch(watchId.current);
      watchId.current = null;
    }
  };

  useEffect(() => {
    if (!navigator.geolocation) return;

    // 2초마다 한번씩 사용자 위치 업데이트
    //intervalId.current = setInterval(() => {
    //  navigator.geolocation.getCurrentPosition(
    //    onEventSuccess,
    //    onEventError,
    //    options,
    //  );
    //}, 2000);

    watchId.current = navigator.geolocation.watchPosition(
      onEventSuccess,
      onEventError,
      options,
    );

    //return () => clearInterval(intervalId.current);
    return () => {
      clearWatch();
    };
  }, []);

  return geolocationInfo;
};

export default useGeolocation;
