import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Global } from "@emotion/react";
import Routes from "./router";
import { globalStyles } from "./global.style";
<<<<<<< HEAD
import { RecoilRoot } from "recoil";
=======

>>>>>>> e26b318703ae6a7443e89d7d31b0a503a43c16a6
function App() {
  const router = createBrowserRouter(Routes);

  return (
    <>
<<<<<<< HEAD
      <RecoilRoot>
        <Global styles={globalStyles} />

        <RouterProvider router={router} />
      </RecoilRoot>
=======
      <Global styles={globalStyles} />

      <RouterProvider router={router} />
>>>>>>> e26b318703ae6a7443e89d7d31b0a503a43c16a6
    </>
  );
}

export default App;
