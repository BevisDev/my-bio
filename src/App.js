import { Fragment } from "react";
import "./App.css";
import MovieList from "./components/movie/MovieList";

function App() {
  return (
    <Fragment>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-5">
        <span className="text-primary">Home</span>
        <span>Movies</span>
      </header>
      <section className="banner h-[500px] page-container mb-10">
        <div className="w-full h-full rounded-lg bg-white relative">
          <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0,5)] to-[rgba(0,0,0,0,0.5)] rounded-lg"></div>
          <img
            src="https://vtv1.mediacdn.vn/thumb_w/650/2019/3/29/avengers-endgame-poster-og-social-crop-15538333303721373423902.jpg"
            className="w-full h-full object-cover rounded-lg"
            alt="123"
          />
          <div className="absolute left-5 bottom-5 w-full text-white">
            <h2 className="font-bold text-3xl mb-5">Avengers: Endgame </h2>
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
      </section>
      <seciton className="movies-layout page-container pb-20  text-white">
        <h2 className="capitaliz mb-10 text-3xl font-bold">Now playing</h2>
        <MovieList />
      </seciton>
    </Fragment>
  );
}

export default App;
