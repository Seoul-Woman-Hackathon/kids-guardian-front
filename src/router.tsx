import { RouteObject } from "react-router-dom";
import MainPage from "@/pages/main";
import Badge from "./pages/badge";
import Knowledge from "./pages/knowledge";
import MyPage from "./pages/myPage";

const Routes: RouteObject[] = [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/badge",
    element: <Badge />,
  },
  {
    path: "/knowledge",
    element: <Knowledge />,
  },
  {
    path: "/mypage",
    element: <MyPage />,
  },
];

export default Routes;
