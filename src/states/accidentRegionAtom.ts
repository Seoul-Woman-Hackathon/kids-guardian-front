import { atom } from 'recoil';

interface ITrafficLocation {
  latitude: number;
  longitude: number;
}

export interface IAccidentRegionAtom {
  in_accident_region: boolean;
  traffic_lights: ITrafficLocation[];
}

export interface ICrossWalkAtom {
  isNearCrossWalk: boolean;
}

export const accidentRegionAtom = atom<IAccidentRegionAtom>({
  key: 'accidentRegionAtom',
  default: {
    in_accident_region: false,
    traffic_lights: [],
  },
});

export const crossWalkAtom = atom<ICrossWalkAtom>({
  key: 'crossWalkAtom',
  default: {
    isNearCrossWalk: false,
  },
});
