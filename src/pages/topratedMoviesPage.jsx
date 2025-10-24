import React from "react";
import { getTopRatedMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';

const TopRated = (props) => {

  const { data, error, isPending, isError } = useQuery({
    queryKey: ['toprated'],
    queryFn: getTopRatedMovies,
  })

  if (isPending) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }

  const movies = data.results;

  return (
    <PageTemplate
      title="Top-rated Movies"
      movies={movies}
      action={(movie) => null}
    />
  );

};

export default TopRated;
