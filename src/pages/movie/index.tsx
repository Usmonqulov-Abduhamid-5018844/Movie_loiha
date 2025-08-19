import { memo, useState } from 'react';
import { useMovie } from './services/useMovie';
import MovieView from '../../shared/components/movie-view/MovieView';
import {Pagination, Select, Skeleton, type PaginationProps} from "antd"
import { useParamsHook } from '../../shared/hooks/usePagination';
import { useGender } from './services/useGender';
import { PERIOD } from '../../static';

const Movie = () => {
  const {getParam, setParam, removeParam} = useParamsHook()
  const page = getParam("page") || "1"
  const with_genres = getParam("gender") || ""
  const period = getParam("period") || ""

  const item = PERIOD.find((i: any)=> i.value === Number(period))
  

  const {getMovies} = useMovie()
  const {getGener} = useGender()
  const {data, isLoading} = getMovies({
    page, 
    with_genres,
    "relase_data_gte":item?.gte,
    "relase_data_lte":item?.lte,
  })
  const {data:genderData} = getGener()
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
        <label  className='dark:text-white text-[25px] font-bold' htmlFor="">Period</label>
         <Select onChange={hendleChangeperiod} className='w-50 overflow-hidden' placeholder="Select period" options={PERIOD}/>
       </div>
      </div>
      {
       isLoading && (
        <div className='continer mx-auto'>
          <Skeleton active/>
        </div>
       ) 
      }
      <MovieView data={data?.results}/>
      <div className='flex justify-center dark:text-white mt-[20px]'>
        <Pagination 
        onChange={onChange}
        current={Number(page)}
        className='dark:bg-gray-900 font-bold'
        total={data?.total_results > 10000 ? 10000 : data?.total_results}
        defaultPageSize={20}
        showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default memo(Movie);