import { RouteObject } from "react-router-dom";

import MainLayout from "@/pages/layout/MainLayout";
import SubLayout from "@/pages/layout/SubLayout";

import MainPage from "@/pages/main";
import BadgePage from "@/pages/badge";
import Knowledge from "@/pages/knowledge";
import MyPage from "@/pages/myPage";
import AlarmPreview from "./components/AlarmPreview";
import CrossWalkAlarm from "./components/CrossWalkAlarm/CrossWalkAlarm";
import CrossWalkLockAlarm from "./components/CrossWalkLockAlarm";
import TestPage from "./pages/test/TestPage";
<<<<<<< HEAD
import Onboarding from "./components/Onboarding/Onboarding";
=======

import Onboarding from "./components/Onboarding/Onboarding";

>>>>>>> 5b9da2ac8e3e9f92fac931c521f6097ba554437a

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
    path: "test",
    element: <TestPage />,
  },
  {
    path: "/alarmPreview",
    element: <AlarmPreview />,
  },
  {
    path: "/crosswalkAlarm",
    element: <CrossWalkAlarm />,
  },
  {
    path: "/crosswalkLock",
    element: <CrossWalkLockAlarm />,
  },
  {
    path: "/onboarding",
    element: <Onboarding />,
  },
];

export default Routes;
