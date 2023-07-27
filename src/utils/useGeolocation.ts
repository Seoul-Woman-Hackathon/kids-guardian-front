import { useCallback, useEffect, useRef, useState } from 'react';

const useGeolocation = () => {
  const geolocationWatchId = useRef<number>(0);

  const [coordinates, setCoordinates] = useState({
    latitude: null,
    longitude: null,
  });
  const { latitude, longitude } = coordinates;

  const updateCoordinates = useCallback(
    ({ coords }: any) => {
      const { latitude, longitude } = coords;
      setCoordinates({ latitude, longitude });
    },
    [coordinates],
  );

  const handlePositionError = useCallback((error: GeolocationPositionError) => {
    setCoordinates({
      latitude: null,
      longitude: null,
    });
    alert(error);
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        updateCoordinates,
        handlePositionError,
      );
      geolocationWatchId.current = navigator.geolocation.watchPosition(
        updateCoordinates,
        handlePositionError,
      );
    }

    return navigator.geolocation.clearWatch(geolocationWatchId.current);
  }, []);

  return [latitude, longitude];
};

export default useGeolocation;
