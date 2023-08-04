import { atom } from "recoil";

interface ITrafficLocation {
  latitude: number;
  longitude: number;
}

export interface IAccidentRegionAtom {
  in_accident_region: boolean;
  traffic_lights: ITrafficLocation[];
}

export const accidentRegionAtom = atom<IAccidentRegionAtom>({
  key: "accidentRegionAtom",
  default: {
    in_accident_region: true,
    traffic_lights: [
      {
        latitude: 37.5026908384,
        longitude: 126.9606264362,
      },
    ],
  },
});
