import React, { useState, useEffect } from "react";
import Path from "../components/Path/Path";
import MovieHeader from "../components/MovieHeader/MovieHeader";
import ActorList from "../components/ActorList/ActorList";
import { useLoaderData } from "react-router-dom";

export default function MoviePage() {
  const loaderData = useLoaderData();

  const [actors, setActors] = useState([]);
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    const directorNames = loaderData.credits.crew
      .filter((el) => el.job === "Director")
      .map((el) => el.name);

    setDirectors(directorNames);

    const actingActors = loaderData.credits.cast
      .filter((el) => el.known_for_department === "Acting");

    setActors(actingActors);
  }, [loaderData]);

  const getMovieCharacteristic = () => {
    const result = {
      runtime: "",
      budget: "$",
      revenue: "$",
    };

    const runtimeH = Math.floor(loaderData.movieData.runtime / 60);
    const runtimeM = loaderData.movieData.runtime % 60;
    result.runtime = `${runtimeH}h ${runtimeM}m`;

    const formatCurrency = (value) => {
      return `$${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
    };

    result.budget = formatCurrency(loaderData.movieData.budget);
    result.revenue = formatCurrency(loaderData.movieData.revenue);

    return result;
  };

  const movieCharacteristics = getMovieCharacteristic();

  return (
    <div className="page">
      <Path title={loaderData.movieData.original_title} />
      <MovieHeader
        runtime={movieCharacteristics.runtime}
        budget={movieCharacteristics.budget}
        revenue={movieCharacteristics.revenue}
        cardImg={loaderData.movieData.poster_path}
        backImg={loaderData.movieData.backdrop_path}
        title={loaderData.movieData.title}
        text={loaderData.movieData.overview}
        rate={Math.round(loaderData.movieData.vote_average * 100) / 100}
        director={directors[0]}
      />
      <ActorList actors={actors} />
    </div>
  );
}