import { memo, type FC } from 'react';
import { IMAGE_URL } from '../../const';
import { useNavigate } from 'react-router-dom';

interface Props {
    data: any,
    option?: boolean
}

const MovieView:FC<Props> = ({data, option}) => {
    const navigate = useNavigate()
  return (
    <div className="continer">
        <div className={`${option ? "flex overflow-x-auto px-[16px] gap-4 scrol-bar" :"grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 px-[16px]"}`}>
            {
                data?.map((movie:any) => (
                    <div key={movie.id} className={`${option ? "min-w-[300px]": "rounded-2xl overflow-hidden"}`}>
                        <div onClick={()=> navigate(`/movie/${movie.id}`)} className='relative'>
                            <p className='text-[20px] px-3
                            bg-black/40 absolute dark:text-gray-200 text-white font-bold top-1.5 left-2'> {movie.release_date.split("-")[0]}</p>
                            <img loading='lazy' src={movie.poster_path ?`${IMAGE_URL}${movie.poster_path}` : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png"} alt={movie.title} className='h-[350px] w-full rounded-2xl' />
                        </div>
                        <div className='p-2 dark:text-white'>
                            <h3 className='font-bold text-xl line-clamp-1' title={movie.title}>{movie.title}</h3>
                            <p> {movie.vote_average}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  );
};

export default memo(MovieView);