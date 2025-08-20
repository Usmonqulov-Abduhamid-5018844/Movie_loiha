import { memo } from 'react';

const Loading = () => {
  return (
    <div className="continer flex flex-col justify-center items-center">
      <div className='w-[1300px] h-[80px] bg-gray-400 mb-4  rounded-2xl'></div>
      <div className='w-[1100px] h-[600px] bg-gray-400 rounded-2xl'></div>
    </div>
  );
};

export default memo(Loading);