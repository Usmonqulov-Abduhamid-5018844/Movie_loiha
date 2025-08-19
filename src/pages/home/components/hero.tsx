import { memo } from 'react';
import { useMovie } from '../../movie/services/useMovie';
import { IMAGE_URL } from '../../../shared/const';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
 const {getMovies} = useMovie()

 const data = getMovies().data
 const navigate = useNavigate()

  return (
<div className="scrol-bar continer_lg flex overflow-x-auto space-x-4">
  {data?.results?.slice(0, 5).map((item: any, index: number) => (
    <div 
      key={index} 
      className="flex-shrink-0 w-[1200px] h-[550px] relative max-[1000px]:w-[900px] max-[1000px]:h-[450px] max-[700px]:w-[550px] max-[700]:h-[400px]"
    >
      <img
      onClick={()=> navigate(`/movie/${item.id}`)}
        src={`${IMAGE_URL}${item.backdrop_path}`}
        alt={item.title}
        className="w-full h-full object-cover rounded-xl"
      />
    </div>
  ))}
</div>

  );
};

export default memo(Hero);