import DnDDashboard from '../../Dashboards/DnDDashboard';
import Home from '../../Dashboards/Home';
import PipeLineDashboard from '../../Dashboards/PipelineDashboard';
import NotFound404 from '../../DefaultPage/404';
import UnAuth from '../../DefaultPage/404/UnAuth';

const routes = [
  {
    path: '/home',
    component: Home,
    companyroles: ['admin', 'usesr'],
  },
  {
    path: '/',
    component: Home,
    companyroles: ['admin', 'usesr'],
  },
  {
    path: '/dashboard',
    component: PipeLineDashboard,
    companyroles: ['admin', 'usesr'],
  },
  {
    path: '/dnddash',
    component: DnDDashboard,
    companyroles: ['admin', 'usesr'],
  },
  {
    path: '/unauth',
    component: UnAuth,
    companyroles: [''],
  },
  { path: '*', component: NotFound404, companyroles: [] },
  // Add all your other routes here
];

export default routes;
