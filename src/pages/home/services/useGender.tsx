import { useQuery } from "@tanstack/react-query";
import { api } from "../../../shared/api";

export const GenderKey = "GenerKeyHero";

export const useGenderHero = () => {
  const getGener = () =>
    useQuery({
      queryKey: [GenderKey],
      queryFn: () =>
        api.get("genre/movie/list").then((res) => res.data),
    });


  return { getGener };
};
