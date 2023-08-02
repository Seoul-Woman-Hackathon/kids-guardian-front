import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Global } from "@emotion/react";
import Routes from "./router";
import { globalStyles } from "./global.style";

import { RecoilRoot } from "recoil";

function App() {
  const router = createBrowserRouter(Routes);

  return (
    <RecoilRoot>
      <Global styles={globalStyles} />

      <RouterProvider router={router} />
    </RecoilRoot>
  );
}

export default App;
