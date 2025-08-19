import { memo, type FC } from 'react';
import { IMAGE_URL } from '../../const';
import { useNavigate } from 'react-router-dom';

interface Props {
    data: any
}

const MovieView:FC<Props> = ({data}) => {
    const navigate = useNavigate()
  return (
    <div className="continer">
        {
            data && console.log(data)
            
        }
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3 px-[16px] ">
            {
                data?.map((movie:any) => (
                    <div key={movie.id} className='rounded-2xl overflow-hidden'>
                        <div onClick={()=> navigate(`/movie/${movie.id}`)} className='relative'>
                            <p className='text-[24px] absolute dark:text-gray-200 text-white font-bold top-1.5 left-2'> {movie.release_date.split("-")[0]}</p>
                            <img loading='lazy' src={`${IMAGE_URL}${movie.poster_path}`} alt={movie.title} />
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