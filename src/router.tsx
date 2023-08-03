import { RouteObject } from "react-router-dom";

import MainLayout from "@/pages/layout/MainLayout";
import SubLayout from "@/pages/layout/SubLayout";

import MainPage from "@/pages/main";
import BadgePage from "@/pages/badge";
import Knowledge from "@/pages/knowledge";
import MyPage from "@/pages/myPage";
import AlarmPage from "./pages/alarm";

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
        path: "badge",
        element: <BadgePage />,
      },
      {
        path: "knowledge",
        element: <Knowledge />,
      },
      {
        path: "myPage",
        element: <MyPage />,
      },
    ],
  },
  {
    path: "/alarm",
    element: <AlarmPage />,
  },
];

export default Routes;
