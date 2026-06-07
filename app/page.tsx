
import Hero from "./components/Hero";
import MoviesSlide from "./components/MoviesSlide";
import tmdbApi from "./api/tmdbAxios";
import Empty from "./components/default/Empty";
import { fetchCustom } from "./api/api";
export default async function Home() {
    let trendingRes = await fetchCustom("/trending/movie/day");
    let topRatedRes = await fetchCustom("/movie/top_rated");
    let upcomingRes = await fetchCustom('/movie/upcoming');
  return (
    <div >
      <Hero results={upcomingRes.data.results} />
      {trendingRes.data ?
        <MoviesSlide results={trendingRes.data.results} title="Trending Movies" /> :
        <Empty title="Not Found Movies" />
      }
      {topRatedRes.data ?
        <MoviesSlide results={topRatedRes.data.results} title="Top Rated Movies" /> :
        <Empty title="Not Found Movies" />
      }
      {upcomingRes.data ?
        <MoviesSlide results={upcomingRes.data.results} title="Upcoming Movies" /> :
        <Empty title="Not Found Movies" />
      }

    </div>
  );
}
