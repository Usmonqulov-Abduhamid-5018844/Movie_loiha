import { memo } from "react";
import { useParams } from "react-router-dom";
import { usePerson } from "./service/useGerPerson";
import { IMAGE_URL } from "../../shared/const";
import { Image } from "antd";
import MovieView from "../../shared/components/movie-view/MovieView";
import Loading from "../../shared/loading/movie_loding";

const Person = () => {
  const { id } = useParams();
  const { getPersonById, getPersonItem } = usePerson();
  const { data } = getPersonById(id || "");
  const { data: personData } = getPersonItem(id || "", "images");
  const { data: MovieData, isLoading } = getPersonItem(id || "", "movie_credits");


  return (
    <div className="continer mt-[50px]">
      <div className="grid md:grid-cols-2 gap-[30px] px-[16px] border">
        <div className="sticky top-0">
          <img
            loading="lazy"
            className="w-[500px]"
            src={IMAGE_URL + data?.profile_path}
            alt=""
          />
        </div>
        <div className=" flex flex-col gap-[10px] overflow-y-auto dark:text-gray-400">
          <h1 className="text-3xl dark:text-white">{data?.name}</h1>
          <strong className="dark:text-red-300">{data?.birthday}</strong>
          <p className="">{data?.biography}</p>
        </div>
      </div>
      <div className="flex overflow-auto gap-3 px-[16px] scrol-bar mt-[30px]">
        {personData?.profiles?.map((item: any, index: string) => (
          <Image
            loading="lazy"
            key={index}
            style={{ height: 300}}
            src={IMAGE_URL + item.file_path}
            className="min-w-[200px]"
          />
        ))}
      </div>

      <div className="mt-[80px]">
        <div className="">
          <h1 className="ml-5 pb-4 text-[30px] font-bold dark:text-gray-300">
            {MovieData?.cast[0]?.character}{" "}
          </h1>
        </div>
        {
            isLoading && <Loading option={true}/>
        }
        <MovieView data={MovieData?.cast.slice(0, 20)} option={true} />
      </div>


      <div className={`mt-[50px] ${MovieData?.cast.length < 20 ? "hidden": ""}`}>
        <div className="">
          <h1 className="ml-5 pb-4 text-[30px] font-bold dark:text-gray-300">
            {MovieData?.cast[1]?.character}{" "}
          </h1>
        </div>
        <MovieView
          data={MovieData?.cast.slice( 20, MovieData?.cast.length)}
          option={true}
        />
      </div>

    </div>
  );
};

export default memo(Person);
