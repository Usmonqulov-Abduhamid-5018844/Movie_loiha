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
                        <div onClick={()=> navigate(`/movie/${movie.id}`)}>
                            <img loading='lazy' src={`${IMAGE_URL}${movie.poster_path}`} alt={movie.title} />
                        </div>
                        <div className='p-2 dark:text-white'>
                            <h3 className='font-bold text-xl line-clamp-1' title={movie.title}>{movie.title}</h3>
                            <p className='text-[20px]'> year: {movie.release_date}</p>
                            <p>⭐ {movie.vote_average}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  );
};

export default memo(MovieView);