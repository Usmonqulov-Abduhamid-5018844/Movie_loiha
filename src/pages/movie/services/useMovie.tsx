import { useQuery } from "@tanstack/react-query";
import { api } from "../../../shared/api";

export const movieKey = "movieKey";

interface Iparams {
  page?: string;
  with_genres?: string;
  "relase_data_gte"?: string;
  "relase_data_lte"?: string;
}

export const useMovie = () => {
  const getMovies = (params?: Iparams) =>
    useQuery({
      queryKey: [movieKey, params],
      queryFn: () =>
        api.get("discover/movie", { params }).then((res) => res.data),
    });

  const getMovieById = (id: string) =>
    useQuery({
      queryKey: [movieKey, id],
      queryFn: () => api.get(`movie/${id}`).then((res) => res.data),
    });

  return { getMovies, getMovieById };
};
