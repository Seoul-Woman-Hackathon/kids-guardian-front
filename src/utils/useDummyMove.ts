import { useEffect, useState } from 'react';

const coords = [
  [37.50616, 126.9232],
  [37.50609, 126.92332],
  [37.50607, 126.9234],
  [37.506, 126.9235],
  [37.50594, 126.9236],
  [37.50587, 126.92371],
  [37.50581, 126.9238],
  [37.50575, 126.92391],
  [37.50569, 126.92401],
  [37.50561, 126.92414],
  [37.50555, 126.92425],
  [37.50547, 126.92434],
  [37.50537, 126.92443],
  [37.50527, 126.92453],
  [37.50503, 126.92477],
  [37.50511, 126.9247],
  [37.50521, 126.9245],
];

const useDummyMove = () => {
  const [coordsIndex, setCoordsIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCoordsIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return {
    latitude: coords[coordsIndex][0],
    longitude: coords[coordsIndex][1],
  };
};

export default useDummyMove;
