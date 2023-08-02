import { RouteObject } from "react-router-dom";
import Knowledge from "./pages/knowledge";
import MyPage from "./pages/myPage";

import MainLayout from "./pages/layout/MainLayout";
import SubLayout from "./pages/layout/SubLayout";
import TestPage from "./pages/test/TestPage";
import BadgePage from "./pages/badge";

const Routes: RouteObject[] = [
  {
    path: "/",

    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <TestPage />,
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
    path: "/test",
    element: <TestPage />,
  },
];

export default Routes;
