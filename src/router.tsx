import { RouteObject } from "react-router-dom";
import MainPage from "@/pages/main";
import Badge from "./pages/badge";
import Knowledge from "./pages/knowledge";
import MyPage from "./pages/myPage";
import MainLayout from "./pages/layout/MainLayout";
import SubLayout from "./pages/layout/SubLayout";
import TestPage from "./pages/test/TestPage";

const Routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
    ],
  },
  {
    path: "/",
    element: <SubLayout />,
    children: [
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
    ],
  },
  {
    path: "/test",
    element: <TestPage />,
  },
];

export default Routes;
