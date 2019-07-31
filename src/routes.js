import Loadable from "react-loadable";
import Loading from "./components/Loading.js";
export default [{
    component: Loadable({
      loader: () => import('./App'),
      loading: Loading,
    }),
    path: "/",
  },
  {
    component: Loadable({
      loader: () => import('./Echarts'),
      loading: Loading,
    }),
    path: "/Echarts",
  },
  {
    component: Loadable({
      loader: () => import('./Component1'),
      loading: Loading,
    }),
    path: "/login",
  },
  {
    component: Loadable({
      loader: () => import('./container/register/register'),
      loading: Loading,
    }),
    path: "/register",
  }
];
