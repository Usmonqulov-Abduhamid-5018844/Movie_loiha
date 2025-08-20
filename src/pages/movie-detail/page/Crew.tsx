import { memo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMovieDetail } from "../services/useMovieDetail";
import { IMAGE_URL } from "../../../shared/const";
import { Button } from "antd";
import MovieView from "../../../shared/components/movie-view/MovieView";

const Crew = () => {
  const [showpage, setShowpage] = useState(14);
  const { id } = useParams();
  const { getMovieItems } = useMovieDetail();
  const { data: creditsData, isLoading } = getMovieItems(id || "", "credits");
  const { data: similarData, isLoading: Loading } = getMovieItems(
    id || "",
    "similar"
  );

  const hendleShow = () => {
    setShowpage((p) => p + 14);
  };
  const navogate = useNavigate()

  return (
    <div className="Crew">
      <div className="grid grid-cols-7 continer  gap-5  mb-[30px]">
        {creditsData?.crew
          ?.slice(
            0,
            creditsData?.crew.length > showpage
              ? showpage
              : creditsData?.crew.length
          )
          .map((user: any, index: number) => {
            const image = user.profile_path
              ? IMAGE_URL + user.profile_path
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png";
            return (
              <div key={index}>
                <div>
                  <img
                  onClick={()=> navogate(`/crew/${user.id}`)}
                    loading="lazy"
                    src={image}
                    className="w-[150px]"
                    alt=""
                  />
                </div>
                <h3>{user.name}</h3>
                <p
                  title={user.job}
                  className="text-gray-500 truncate w-[150px]"
                >
                  {user.job}
                </p>
                <p className="text-gray-400 truncate w-[150px]">
                  {user.popularity}
                </p>
              </div>
            );
          })}
      </div>
      <div className=" justify-center gap-6 mb-[40px] flex ">
        <Button onClick={hendleShow} type="primary">
          Next page
        </Button>
        <Button onClick={() => setShowpage(7)} type="primary">
          Clous page
        </Button>
      </div>
      <div>
        {(isLoading || Loading) && (
          <div className="grid grid-cols-4 gap-3">
            <div className="h-[400px] bg-gray-300 rounded-2xl"></div>
            <div className="h-[400px] bg-gray-300 rounded-2xl"></div>
            <div className="h-[400px] bg-gray-300 rounded-2xl"></div>
            <div className="h-[400px] bg-gray-300 rounded-2xl"></div>

            <div className="h-[400px] bg-gray-300 rounded-2xl"></div>
            <div className="h-[400px] bg-gray-300 rounded-2xl"></div>
            <div className="h-[400px] bg-gray-300 rounded-2xl"></div>
            <div className="h-[400px] bg-gray-300 rounded-2xl"></div>

            <div className="h-[400px] bg-gray-300 rounded-2xl"></div>
            <div className="h-[400px] bg-gray-300 rounded-2xl"></div>
            <div className="h-[400px] bg-gray-300 rounded-2xl"></div>
            <div className="h-[400px] bg-gray-300 rounded-2xl"></div>
          </div>
        )}
        <MovieView data={similarData?.results} option={true} />
      </div>
    </div>
  );
};

export default memo(Crew);
