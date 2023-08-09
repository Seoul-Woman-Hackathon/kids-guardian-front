import Flatten from '@flatten-js/core';

const { Point } = Flatten;

const calculateDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
) => new Point(lon1, lat1).distanceTo(new Point(lon2, lat2))[0];

export const isLocatedNearCrossWalk = (
  latitude: any,
  longitude: any,
  crossWalks: any[],
) => {
  let nearByUser = false;
  let targetCrossWalk = [null, null];

  for (let i = 0; i < crossWalks.length; i++) {
    const dist = calculateDistance(
      latitude,
      longitude,
      crossWalks[i].latitude,
      crossWalks[i].longitude,
    );

    if (dist <= 0.0002) {
      nearByUser = true;
      targetCrossWalk[0] = crossWalks[i].latitude;
      targetCrossWalk[1] = crossWalks[i].longitude;

      return;
    }

    return { nearByUser, targetCrossWalk };
  }
};

export const isFarFromCrossWalk = (
  latitude: any,
  longitude: any,
  crossWalkLatitude: number,
  crossWalkLongitude: number,
) => {
  let isFar = false;

  const dist = calculateDistance(
    latitude,
    longitude,
    crossWalkLatitude,
    crossWalkLongitude,
  );

  if (dist > 0.0002) {
    isFar = true;
  }

  return isFar;
};
