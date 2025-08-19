import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useMovieDetail } from './services/useMovieDetail';
import { IMAGE_URL } from '../../shared/const';
import MovieView from '../../shared/components/movie-view/MovieView';
import { Image } from 'antd';

const MovieDetail = () => {
  const {id} = useParams()
  const {getMovieById, getMovieItems} = useMovieDetail()
  const {data, isLoading} = getMovieById(id || "")
  const {data: imagesData} = getMovieItems(id || "", "images")
  const {data: similarData} = getMovieItems(id || "", "similar")
  const {data: creditsData} = getMovieItems(id || "", "credits")

  console.log(creditsData);
  

  if(isLoading){
    return <div className='container mx-auto '>
      <div className='w-full h-[500px] bg-gray-300 animate-pulse'></div>
      <div className='my-3 w-[60%] h-10 bg-gray-300 animate-pulse'></div>
      <div className='my-3 w-[30%] h-10 bg-gray-300 animate-pulse'></div>
    </div>
  }
  return (
    <div className="dark:text-white">
      <div className='continer'>
        <img src={`${IMAGE_URL}${data?.backdrop_path}`} alt="" />
      </div>
      <div className='continer py-3'>
        <h1 className='text-3xl font-bold'>{data?.title}</h1>
        <strong>{data?.budget?.toLocaleString()} USD</strong>
      </div>
      <div className='continer flex-wrap flex gap-4 justify-between mb-[50px]'>
        {
          imagesData?.backdrops?.slice(0, 20)?.map((item: any, inx: number) => (
            <Image loading='lazy'  key={inx} src={IMAGE_URL + item.file_path} width={180} alt=""/>
          ))
        }
      </div>
      <h1 className='continer'>Actors</h1>
      <div className='flex flex-wrap continer  gap-5 justify-between mb-[50px]'>
        {
          creditsData?.cast?.map((user: any) => {
            const image = user.profile_path ? IMAGE_URL + user.profile_path : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png"
            return <div key={user.id}>
              <div>
                <img loading='lazy' src={image} className='w-[150px]' alt="" />
              </div>
              <h3>{user.name}</h3>
              <p title={user.character} className='text-gray-500 truncate w-[150px]'>{user.character}</p>
            </div>
        })
        }
      </div>
      <div>
        <MovieView data={similarData?.results}/>
      </div>
    </div>
  );
};

export default memo(MovieDetail);