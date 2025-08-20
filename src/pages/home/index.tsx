import { memo } from 'react';
import Hero from './components/hero';
import { useMovie } from '../movie/services/useMovie';
import MovieView from '../../shared/components/movie-view/MovieView';

const Home = () => {
  const {getMovies} = useMovie()
 const data= getMovies().data

  return (
    <div className="">
      <Hero data={data?.results?.slice(0, 5)}/>
      <div className='mb-[80px]'>
      </div>
        <MovieView data={data?.results?.slice(0,8)}/>
    </div>
  );
};

export default memo(Home);