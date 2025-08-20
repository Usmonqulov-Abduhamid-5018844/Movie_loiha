import { memo } from 'react';

const Loading = () => {
  return (
    <>
    <div className="continer_lg flex flex-col justify-center">
      <div className='continer w-[1300px] h-[80px] bg-gray-400 mb-4  rounded-2xl mt-[20px]'></div>
      <div className='w-full h-[600px] bg-gray-300 rounded-2xl'></div>
    </div>
    <div className='continer mt-[20px] grid grid-cols-4 gap-3'>
      <div className=' h-[500px] bg-gray-300'></div>
      <div className=' h-[500px] bg-gray-300'></div>
      <div className=' h-[500px] bg-gray-300'></div>
      <div className=' h-[500px] bg-gray-300'></div>
      <div className=' h-[500px] bg-gray-300'></div>
      <div className=' h-[500px] bg-gray-300'></div>
      <div className=' h-[500px] bg-gray-300'></div>
      <div className=' h-[500px] bg-gray-300'></div>
      <div className=' h-[500px] bg-gray-300'></div>
      <div className=' h-[500px] bg-gray-300'></div>
      <div className=' h-[500px] bg-gray-300'></div>
      <div className=' h-[500px] bg-gray-300'></div>
    </div>
    </>
  );
};

export default memo(Loading);