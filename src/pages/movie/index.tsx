import { memo } from 'react';
import { useMovie } from './services/useMovie';
import MovieView from '../../shared/components/movie-view/MovieView';
import {Pagination, Select, type PaginationProps} from "antd"
import { useParamsHook } from '../../shared/hooks/usePagination';
import { useGender } from './services/useGender';
import { PERIOD } from '../../shared/static';
import Movie_loding from '../../shared/loading/movie_loding';

const Movie = () => {
  const {getParam, setParam, removeParam} = useParamsHook()
  const page = getParam("page") || "1"
  const with_genres = getParam("gender") || ""
  const period = getParam("period") || ""

  const item = PERIOD.find((i: any)=> i.value === Number(period))
  

  const {getMovies} = useMovie()
  const {data, isLoading} = getMovies({
    page, 
    with_genres,
    "release_date.gte":item?.gte,
    "release_date.lte":item?.lte,
  })

  const {getGener} = useGender()
  const {data:genderData} = getGener() 
  console.log(genderData);
  
  const option = genderData?.genres?.map((item: any)=> ({
    value: item.id,
    label: item.name,
  }))


  const onChange:PaginationProps["onChange"] = (page)=>{
    if(page === 1){
      removeParam("page")
    }
    else{
      setParam("page", page)
    }
  }
  const hendleChange = (value: string)=>{
    setParam("gender", value)
  }
  const hendleChangeperiod = (value: string) =>{
    setParam("period", value)
  }

  
  return (
    <div className="continer mt-[20px] mb-[20px]">
      <div className='mb-[20px] ml-6 flex  gap-4 '>
        <div className='flex flex-col gap-2'>
          <label className='dark:text-white text-[25px] font-bold'>Gender</label>
        <Select onChange={hendleChange} className='w-50 overflow-hidden' placeholder="Select gender" options={option}/>
        </div>
       <div className='flex flex-col gap-2'>
        <label  className='dark:text-white text-[25px] font-bold ' htmlFor="">Period</label>
         <Select onChange={hendleChangeperiod} className='w-50 overflow-hidden' placeholder="Select period" options={PERIOD}/>
       </div>
      </div>
      {
       isLoading && (
        <Movie_loding/>
       ) 
      }
      <MovieView data={data?.results}/>
      <div className='flex justify-center dark:text-white mt-[20px]'>
        <Pagination 
        onChange={onChange}
        current={Number(page)}
        className='dark:bg-amber-200/30  rounded-2xl font-bold'
        total={data?.total_results > 10000 ? 10000 : data?.total_results}
        defaultPageSize={20}
        showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default memo(Movie);