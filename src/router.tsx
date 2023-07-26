import { RouteObject } from "react-router-dom";
import TestPage from "./pages/test";

const Routes: RouteObject[] = [
  {
    path: "/",
    element: <TestPage />,
  },
  {
    path: "/test",
    element: <h1>test</h1>,
  },
];

export default Routes;
