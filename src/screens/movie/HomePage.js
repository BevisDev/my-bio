import { Fragment } from "react";
import Header from "../../components/movie/Header";
import Banner from "../../components/movie/home/Banner";
import MovieList from "../../components/movie/home/MovieList";
import { NOW_PLAYING, TOP_RATED, UPCOMMING } from "../../constant/ConstString";

const HomePage = () => {
  return (
    <>
      <Header />
      <Banner type={UPCOMMING} />
      <Main />
    </>
  );
};

const Main = () => {
  return (
    <Fragment>
      <section className="movies-layout page-container pb-20  text-white">
        <h2 className="capitaliz mb-10 text-3xl font-bold">Now playing</h2>
        <MovieList type={NOW_PLAYING} />
      </section>
      <section className="movies-layout page-container pb-20  text-white">
        <h2 className="capitaliz mb-10 text-3xl font-bold">Top rated</h2>
        <MovieList type={TOP_RATED} />
      </section>
      <section className="movies-layout page-container pb-20  text-white">
        <h2 className="capitaliz mb-10 text-3xl font-bold">Up Comming</h2>
        <MovieList type={UPCOMMING} />
      </section>
    </Fragment>
  );
};

export default HomePage;
