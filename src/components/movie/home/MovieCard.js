import { GET_IMAGE_MOVIE_PATH } from "../../../constant/ConstPath";
import { W500 } from "../../../constant/ConstString";

const MovieCard = ({ item }) => {
  const { title, vote_average, release_date, poster_path } = item;
  return (
    <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-800 select-none h-full">
      <img
        src={GET_IMAGE_MOVIE_PATH.replace("{type}", W500) + poster_path}
        className="w-full h-[250px] object-center rounded-lg"
        alt="NOT_FOUND"
      />

      <div className="flex flex-col flex-1">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <div className="flex items-center justify-between text-sm opacity-50 mb-10">
          <span>{new Date(release_date).getFullYear()}</span>
          <span>{vote_average}</span>
        </div>
        <button className="mt-auto py-3 px-6 rounded-lg capitalize bg-primary">
          Watch Now
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
