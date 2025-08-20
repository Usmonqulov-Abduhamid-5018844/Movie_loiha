import { lazy, memo } from "react";
import { useRoutes } from "react-router-dom";
import NotFount from "../pages/notFount";
import Cases from "../pages/movie-detail/page/Cases";
import Crew from "../pages/movie-detail/page/Crew";
const MainLayout = lazy(() => import("../layout/MainLayout"));
const Home = lazy(() => import("../pages/home"));
const Movie = lazy(() => import("../pages/movie"));
const MovieDetail = lazy(() => import("../pages/movie-detail"));

const AppRouters = () => {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "movie", element: <Movie /> },
        {
          path: "movie/:id",
          element: <MovieDetail />,
          children: [
            { index: true, element: <Cases /> },
            { path: "crew", element: <Crew /> },
          ],
        },
        { path: "*", element: <NotFount /> },
      ],
    },
  ]);
};

export default memo(AppRouters);
