import { memo } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { useMovieDetail } from './services/useMovieDetail';
import { IMAGE_URL } from '../../shared/const';

import { Image } from 'antd';

const MovieDetail = () => {
  const {id} = useParams()
  const {getMovieById, getMovieItems} = useMovieDetail()
  const {data, isLoading} = getMovieById(id || "")
  const {data: imagesData} = getMovieItems(id || "", "images")

  

  if(isLoading){
    return <div className='container mx-auto '>
      <div className='w-full h-[500px] bg-gray-300 animate-pulse'></div>
      <div className='my-3 w-[60%] h-10 bg-gray-300 animate-pulse'></div>
      <div className='my-3 w-[30%] h-10 bg-gray-300 animate-pulse'></div>
    </div>
  }
  return (
    <div className="dark:text-white continer">
      <div >
        <img src={`${IMAGE_URL}${data?.backdrop_path}`} alt="" />
      </div>
      <div className='continer py-3'>
        <h1 className='text-3xl font-bold'>{data?.title}</h1>
        <strong>{data?.budget?.toLocaleString()} USD</strong>
      </div>
      <div className=' flex gap-4 mb-[50px] overflow-auto scrol-bar'>
        {
          imagesData?.backdrops?.map((item: any, inx: number) => (
            <Image loading='lazy' className='min-w-[240px] flex gap-2'  key={inx} src={IMAGE_URL + item.file_path} alt=""/>
          ))
        }
      </div>
      <div className='continer flex gap-4 border-b-2 dark:border-gray-500 border-gray-300 py-3 text-[20px] mb-[30px]'>
      <NavLink end={true} className={({isActive})=> isActive ? "text-red-400 border-b-2" : ""} to={""}>Cest</NavLink>
      <NavLink className={({isActive})=> isActive ? "text-red-400 border-b-2" : ""} to={"crew"}>Crew</NavLink>
      </div>
      <Outlet/>
    </div>
  );
};

export default memo(MovieDetail);