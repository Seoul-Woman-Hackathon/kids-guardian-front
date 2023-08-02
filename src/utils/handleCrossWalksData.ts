import Flatten from '@flatten-js/core';

const { Point } = Flatten;

const sampleData = [
  //  [37.6707984, 128.7131173],
  //  [37.6708264, 128.7131173],
  //  [37.6708006, 128.7131266],
  //  [37.6708035, 128.7131369],
  //  [37.6708025, 128.7131533],
  [37.4963, 126.9569],
];

const calculateDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
) => new Point(lon1, lat1).distanceTo(new Point(lon2, lat2))[0];

const isLocatedNearCrossWalk = (latitude: any, longitude: any) => {
  let nearByUser = false;
  for (let i = 0; i < sampleData.length; i++) {
    const dist = calculateDistance(
      latitude,
      longitude,
      sampleData[i][0],
      sampleData[i][1],
    );

    if (dist <= 20) {
      nearByUser = true;
      return;
    }

    return nearByUser;
  }
};

export default isLocatedNearCrossWalk;
