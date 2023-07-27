import { RouteObject } from 'react-router-dom';
import MainPage from '@/pages/main';

const Routes: RouteObject[] = [
  {
    path: '/',
    element: <MainPage />,
  },
];

export default Routes;
