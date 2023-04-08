import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import MovieCard from "./MovieCard";
import { fetcher } from "../../config/config";
import useSWR from "swr";

const MovieList = () => {
  const { data, error } = useSWR("api/sdadsa", fetcher);
  return (
    <div className="movie-list">
      <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
        <SwiperSlide>
          <MovieCard />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard />
        </SwiperSlide>
        <SwiperSlide>
          <MovieCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MovieList;
