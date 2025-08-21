import { memo, type FC } from 'react';
import { IMAGE_URL } from '../../../shared/const';
import { useNavigate } from 'react-router-dom';
import { useGenderHero } from '../services/useGender';
import { Button, Carousel } from 'antd';
import herobuttonImg from "../../../shared/assets/hero/Vector (1).svg"


interface Props {
  data: any
}

const Hero:FC<Props> = ({data}) => {
  const {getGener} = useGenderHero()

  const {data: genderData} = getGener()
 const navigate = useNavigate()
 
 const hendlegender = (ids: number[])=> {  
  return genderData?.genres?.filter((item: any)=> ids.includes(item.id))
 }

  return (
    <div className='continer_lg'>
  <Carousel arrows infinite={true} adaptiveHeight={true} autoplay={{dotDuration:true}} autoplaySpeed={3000}>
     {data?.map((item: any, index: number) => (
    <div 
      key={index} 
      className="flex-shrink-0 w-[1200px] h-[600px] relative max-[1000px]:w-[900px] max-[1000px]:h-[450px] max-[700px]:w-[550px] max-[700]:h-[400px]"
    >
      <img
        src={`${IMAGE_URL}${item.backdrop_path}`}
        alt={item.title}
        className="w-full h-full "
      />
      <div  className='absolute bg-black/30 w-full text-white pb-[20px] flex flex-col items-center bottom-1 left-1/2 -translate-x-1/2 font-bold text-[30px]'>
         <div>
           <h1>{item.title}</h1>
         </div>
          <div className='flex gap-[15px]'>
          <p className='text-[18px] text-gray-300'>{item.release_date.split("-")[0]}</p>
          <p className='text-[18px] text-gray-300'>{hendlegender(item.genre_ids)?.map((g: any)=> g.name).join(" . ")}</p>
          <p  className='text-[18px] text-gray-300'>{item.original_language.toUpperCase()}</p>
          <p  className='text-[18px] text-gray-300'>14+</p>
          </div>
          <div className='mt-[10px]'>
            <Button onClick={()=> navigate(`/movie/${item.id}`)} className='w-[400px]' type='dashed' style={{height: "50px"}}>
              <img src={herobuttonImg} alt="" />
              Смотреть
            </Button>
          </div>
      </div>
    </div>
    
  ))}
  </Carousel>
  </div>

  );
};

export default memo(Hero);