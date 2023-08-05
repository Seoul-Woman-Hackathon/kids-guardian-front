import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Global } from '@emotion/react';
import Routes from './router';
import { globalStyles } from './global.style';

import { RecoilRoot } from 'recoil';
import AlarmModal from './pages/alarmModal';

function App() {
  const router = createBrowserRouter(Routes);

  return (
    <RecoilRoot>
      <Global styles={globalStyles} />
      <AlarmModal />
      <RouterProvider router={router} />
    </RecoilRoot>
  );
}

export default App;
