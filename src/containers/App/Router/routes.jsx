import DnDDashboard from "../../Dashboards/DnDDashboard";
import DragAndDropdashboard from "../../Dashboards/DragAndDropdashboard";
import Home from "../../Dashboards/Home";
import PipeLineDashboard from "../../Dashboards/PipelineDashboard";
import NotFound404 from "../../DefaultPage/404";
import UnAuth from "../../DefaultPage/404/UnAuth";

// temp
import Chatbox from "../../Dashboards/ChatBox";

const routes = [
  {
    path: "/home",
    component: Home,
    companyroles: ["admin", "usesr"],
  },
  {
    path: "/",
    component: Home,
    companyroles: ["admin", "usesr"],
  },
  {
    path: "/dashboard",
    component: PipeLineDashboard,
    companyroles: ["admin", "usesr"],
  },
  {
    path: "/dnddash",
    component: DragAndDropdashboard,
    companyroles: ["admin", "usesr"],
  },
  {
    path: "/chatbox",
    component: Chatbox,
    companyroles: ["admin", "usesr"],
  },
  {
    path: "/dnd",
    component: DnDDashboard,
    companyRole: ["admin", "usesr"],
  },
  {
    path: "/unauth",
    component: UnAuth,
    companyroles: [""],
  },
  { path: "*", component: NotFound404, companyroles: [] },
  // Add all your other routes here
];

export default routes;
