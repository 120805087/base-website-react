import React from "react";
import { Navigate } from "react-router-dom";

// 给页面做懒加载
const Home = React.lazy(() => import("@/views/Home"));
const Detail = React.lazy(() => import("@/views/detail"));

const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
];

export default routes;
