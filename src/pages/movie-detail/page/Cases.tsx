import { memo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useMovieDetail } from "../services/useMovieDetail";
import { IMAGE_URL } from "../../../shared/const";
import MovieView from "../../../shared/components/movie-view/MovieView";
import { Button } from "antd";
import Loading from "../../../shared/loading/movie_loding";

const Cases = () => {
  const [showpage, setShowpage] = useState(12);
  const { id } = useParams();
  const { getMovieItems } = useMovieDetail();
  const { data: creditsData, isLoading: Loding } = getMovieItems(id || "", "credits");
  const { data: similarData, isLoading } = getMovieItems(id || "", "similar");

  const hendleShow = ()=>{
    setShowpage((p)=> p + 12)
    
  }
  const navigate = useNavigate()

  return (
    <div className="Cases">
        {Loding && <Loading option={true}/>}
      <div className="grid grid-cols-6 continer  gap-5  mb-[30px]">
        {creditsData?.cast
          ?.slice(0, creditsData?.cast.length > showpage ? showpage : creditsData?.cast.length)
          .map((user: any) => {
            const image = user.profile_path
              ? IMAGE_URL + user.profile_path
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png";
            return (
              <div key={user.id}>
                <div>
                  <img
                  onClick={()=> navigate(`/person/${user.id}`)}
                    loading="lazy"
                    src={image}
                     style={{ height: 300}}
                    className="w-[350px]"
                    alt=""
                  />
                </div>
                <h3>{user.name}</h3>
                <p
                  title={user.character}
                  className="text-gray-500 truncate w-[150px]"
                >
                  {user.character}
                </p>
              </div>
            );
          })}
      </div>
      <div className=" justify-center gap-6 mb-[40px] flex ">
        <Button  onClick={hendleShow} type="primary">
             Next page
        </Button>
        <Button  onClick={()=> setShowpage(6)} type="primary">
             Clous page
        </Button>
      </div>
      <div>
        {isLoading && (
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

export default memo(Cases);
