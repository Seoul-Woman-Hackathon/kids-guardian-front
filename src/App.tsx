import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Global } from "@emotion/react";
import Routes from "./router";
import { globalStyles } from "./global.style";

function App() {
  const router = createBrowserRouter(Routes);

  return (
    <>
      <Global styles={globalStyles} />

      <RouterProvider router={router} />
    </>
  );
}

export default App;
