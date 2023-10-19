import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.css";

export default function MovieList({ movies }) {
  return (
    <div className="movie-list">
      <h1>Popular Movies</h1>
      <div className="movie-list_container">
        {movies.map((movie) => (
          <MovieCard key={movie.id} id={movie.id} img={movie.poster_path} />
        ))}
      </div>
    </div>
  );
}
