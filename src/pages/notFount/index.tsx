import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

const Notfount = () => {
    const navigate = useNavigate()
  return (
    <div className="w-[400px] mx-auto text-center mt-[100px] bg-cyan-200 py-[30px] rounded-2xl dark:bg-gray-800 dark:text-white">
        <h1 className='text-[60px] text-red-700 font-bold'>404</h1>
        <button onClick={()=> navigate(-1)} className='px-[15px] py-1 rounded-[5px] bg-green-600 text-white font-bold'>Go back</button>
    </div>
  );
};

export default memo(Notfount);