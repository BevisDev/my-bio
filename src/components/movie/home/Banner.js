import useSWR from "swr";
import {
  GET_IMAGE_MOVIE_PATH,
  MOVIE_LIST_PATH,
} from "../../../constant/ConstPath";
import { API_KEY, fetcher } from "../../../config/config";
import { LANGUAGE_US_AND_PAGING, ORIGINAL } from "../../../constant/ConstString";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = ({ type }) => {
  const { data, error } = useSWR(
    MOVIE_LIST_PATH.replace("{type}", type) + API_KEY + LANGUAGE_US_AND_PAGING,
    fetcher
  );

  const movies = data?.results || [];

  return (
    <section className="banner h-[500px] page-container mb-20 overflow-hidden">
      <Swiper grabCursor={true} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

const BannerItem = ({ item }) => {
  const { title, poster_path } = item;
  return (
    <div className="w-full h-full rounded-lg bg-white relative">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0,5)] to-[rgba(0,0,0,0,0.5)] rounded-lg"></div>
      <div className="h-auto">
        <img
          src={GET_IMAGE_MOVIE_PATH.replace("{type}", ORIGINAL) + poster_path}
          className="w-full h-full object-center rounded-lg"
          alt="NOT_FOUND_BANNER"
        />
      </div>
      <div className="absolute left-5 bottom-5 w-full text-white">
        <h2 className="font-bold text-3xl mb-5">{title}</h2>
        <div className="flex items-center gap-x-3 mb-8">
          <span className="px-4 py-4 border border-white rounded-md">
            Adventure
          </span>
          <span className="px-4 py-4 border border-white rounded-md">
            Adventure2
          </span>
          <span className="px-4 py-4 border border-white rounded-md">
            Adventure3
          </span>
        </div>
        <button className="py-3 px-6 rounded-lg bg-primary text-white font-medium">
          Watch Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
