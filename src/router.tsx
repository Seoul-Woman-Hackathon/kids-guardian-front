import { RouteObject } from 'react-router-dom';
import TestPage from '@/pages/test';

const Routes: RouteObject[] = [
  {
    path: '/',
    element: <div>This is Main Page</div>,
  },
  {
    path: '/test',
    element: <TestPage />,
  },
];

export default Routes;
