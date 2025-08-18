import { lazy, memo } from 'react';
import { useRoutes } from 'react-router-dom';
import NotFount from '../pages/notFount';
const MainLayout = lazy(()=> import("../layout/MainLayout"))
const Home = lazy(()=> import("../pages/home"))
const Movie = lazy(()=> import("../pages/movie"))
const MovieDetail = lazy(()=> import("../pages/movie-detail"))

const AppRouters = () => {
  return useRoutes([
    {path: "/", element: <MainLayout/>, children: [
      {index: true, element:<Home/>},
      {path:"movie", element:<Movie/>},
      {path:"movie/:id", element:<MovieDetail/>},
      {path:"*", element:<NotFount/>}
    ]}
  ])
};

export default memo(AppRouters);