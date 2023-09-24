import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "./MovieCard";
import { API_KEY, fetcher } from "../../../config/config";
import useSWR from "swr";
import { MOVIE_LIST_PATH } from "../../../constant/PathConst";
import { useEffect, useState } from "react";
import { LANGUAGE_US_AND_PAGING } from "../../../constant/Const";

const MovieList = ({ type }) => {
  const [movies, setMovies] = useState([]);
  const { data, error } = useSWR(
    MOVIE_LIST_PATH.replace("{type}", type) + API_KEY + LANGUAGE_US_AND_PAGING,
    fetcher
  );

  useEffect(() => {
    if (data && data.results) {
      setMovies(data.results);
    }
  }, [data]);

  return (
    <div className="movie-list">
      <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
