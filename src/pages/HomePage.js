import MainFilm from "../components/MainFilm/MainFilm";
import Input from "../components/Input/Input";
import { useEffect, useState } from "react";
import MovieList from "../components/MovieList/MovieList";
import LoadMore from "../components/LoadMore/LoadMore";

export default function HomePage() {
  const [inputValue, setInputValue] = useState("");
  const [language, setLanguage] = useState("en");

  const [trendMovie, setTrendMovie] = useState([{}]);
  const [movies, setMovies] = useState([{}]);
  const [loaderPage, setLoaderPage] = useState(2);

  const API_KEY = "dc31091a1c1df71a3d2f7df5909d1976";
  const getFilmData = async (value, endpoint, query, page, array) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/${endpoint}?api_key=${API_KEY}${
        query || ""
      }&include_adult=false&language=${language}-${language}&page=${
        page || "1"
      }`
    );
    const { results } = await response.json();
    if (array) {
      value([...array, ...results]);
    } else {
      value(results);
    }
  };

  const loadMorePages = () => {
    setLoaderPage(loaderPage + 1);
    getFilmData(setMovies, "movie/popular", "", loaderPage, movies);
  };

  useEffect(() => {
    getFilmData(setMovies, "search/movie", `&query=${inputValue}`);

    if (!inputValue.trim()) {
      getFilmData(setMovies, "movie/popular");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  useEffect(() => {
    getFilmData(setTrendMovie, "movie/now_playing");
    getFilmData(setMovies, "movie/popular");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  useEffect(() => {
    getFilmData(setTrendMovie, "movie/now_playing");
    getFilmData(setMovies, "movie/popular");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="page">
      <MainFilm
        title={trendMovie[0].title}
        text={trendMovie[0].overview}
        img={trendMovie[0].backdrop_path}
      />
      <Input
        inputValue={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onSelect={(e) => setLanguage(e.target.value)}
      />
      <MovieList movies={movies} />
      <LoadMore onClick={loadMorePages} />
    </div>
  );
}
