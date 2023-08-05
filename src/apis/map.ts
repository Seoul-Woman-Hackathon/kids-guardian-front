import { getAsync } from '.';

//export async function getSeoulPolygonData() {
//  const searchYearCdList = [
//    2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
//  ];
//  const guGunList = [
//    680, 740, 305, 500, 620, 21, 530, 545, 350, 320, 230, 590, 440, 410, 650,
//    200, 290, 710, 470, 560, 170, 380, 110, 140, 260,
//  ];

//  const polygons: any[] = [];
//  const coords: any[] = [];

//  for (let i = 0; i < searchYearCdList.length; i++) {
//    for (let j = 0; j < guGunList.length; j++) {
//      const response = await axios.get(
//        `https://apis.data.go.kr/B552061/frequentzoneChild/getRestFrequentzoneChild?ServiceKey=${PUBLIC_KEY}&searchYearCd=${searchYearCdList[i]}&siDo=11&guGun=${guGunList[j]}&type=json&numOfRows=10&pageNo=1`,
//      );

//      const { resultCode, items } = response.data;

//      if (resultCode === '00') {
//        items.item.forEach((item: any) => {
//          polygons.push(item.geom_json);
//          coords.push([item.la_crd, item.lo_crd]);
//        });
//      }
//    }
//  }
//  console.log(coords);
//}

export async function checkUserInPolygon(
  latitude: number | null,
  longitude: number | null,
) {
  const response = await getAsync(
    `/map/?latitude=${latitude}&longitude=${longitude}`,
  );
  return response;
}
