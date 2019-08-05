import Loadable from "react-loadable";
import Loading from "./components/Loading.js";
export default [{
    component: Loadable({
      loader: () => import('./container/index/App'),
      loading: Loading,
    }),
    path: "/",
  },
  {
    component: Loadable({
      loader: () => import('./container/echarts/Echarts'),
      loading: Loading,
    }),
    path: "/Echarts",
  },
  {
    component: Loadable({
      loader: () => import('./container/login/login'),
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
