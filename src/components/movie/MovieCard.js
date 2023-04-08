const MovieCard = () => {
  return (
    <div className="movie-card rounded-lg p-3 bg-slate-800">
      <img
        src="https://vtv1.mediacdn.vn/thumb_w/650/2019/3/29/avengers-endgame-poster-og-social-crop-15538333303721373423902.jpg"
        className="w-full h-[250px] object-cover rounded-lg"
        alt="alt"
      />
      <h3 className="text-2xl font-bold mb-3">Spiderman: Homecoming</h3>
      <div className="flex items-center justify-between text-sm opacity-50 mb-10">
        <span>2017</span>
        <span>7.4</span>
      </div>
      <button className="py-3 px-6 rounded-lg capitalize bg-primary">
        Watch Now
      </button>
    </div>
  );
};

export default MovieCard;
