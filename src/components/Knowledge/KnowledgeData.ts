interface KnowledgeDataType {
  id: number;
  title: string;
  subTitle: string;
  img: string;
  detail: string[];
}

export const KNOWLEDGE_DATA: KnowledgeDataType[] = [
  {
    id: 0,
    title: "어린이 스쿨존 안전 수칙",
    subTitle: "우리가 스쿨존에서 지켜야 할 것들은 무엇이 있을까요?",
    img: "https://images.unsplash.com/photo-1612355524120-462e49e4ffe6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    detail: [
      "자동차가 다니는 길과 가까운 길로 걷지 않기 ",
      "친구와 장난치며 길에서 뛰지 않기 ",
      "자동차 뒤에서 놀지 않기",
      "초록불일 때는 좌,우로 자동차를 살피고 건너기",
      "무단횡단 절대 하지 않기",
    ],
  },
  {
    id: 1,
    title: "안전한 도로 횡단 방법",
    subTitle: "안전한 도로 횡단 방법에 대해 알아볼까요?",
    img: "https://images.unsplash.com/photo-1650157418975-31dfdb8ffed6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    detail: [
      "자동차가 다니는 길과 가까운 길로 걷지 않기 ",
      "친구와 장난치며 길에서 뛰지 않기 ",
      "자동차 뒤에서 놀지 않기",
      "초록불일 때는 좌,우로 자동차를 살피고 건너기",
      "무단횡단 절대 하지 않기",
    ],
  },
];
