import { memo, type FC } from 'react';

interface props {
    option?: boolean
}

const Movie_Loding:FC<props> = ({option}) => {
  return (
    <>
    <div className={`${option ? "flex overflow-auto" : "mt-[20px] grid grid-cols-4 gap-3"} continer`}>
      <div className=' h-[400px] bg-gray-300'></div>
      <div className=' h-[400px] bg-gray-300'></div>
      <div className=' h-[400px] bg-gray-300'></div>
      <div className=' h-[400px] bg-gray-300'></div>
      <div className=' h-[400px] bg-gray-300'></div>
      <div className=' h-[400px] bg-gray-300'></div>
      <div className=' h-[400px] bg-gray-300'></div>
      <div className=' h-[400px] bg-gray-300'></div>
      <div className=' h-[400px] bg-gray-300'></div>
      <div className=' h-[400px] bg-gray-300'></div>
      <div className=' h-[400px] bg-gray-300'></div>
      <div className=' h-[400px] bg-gray-300'></div>
      <div className=' h-[400px] bg-gray-300'></div>
      <div className=' h-[400px] bg-gray-300'></div>
    </div>
    </>
  );
};

export default memo(Movie_Loding);