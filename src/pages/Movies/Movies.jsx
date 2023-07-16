import { useState } from 'react';
import { Loader, Form, SearchList } from '../../components';
import { fetchMovies } from 'services/fetchData';

const Movies = () => {
  const [search, setSearch] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [noMoviesText, setNoMoviesText] = useState(false);

  const searchMovies = queryMovie => {
    setIsLoading(true);

    fetchMovies(queryMovie)
      .then(searchResults => {
        setSearch(searchResults);
        setNoMoviesText(searchResults.length === 0);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <main>
      <Form searchMovies={searchMovies} />
      {isLoading && <Loader />}
      {noMoviesText && (
        <p>There is no movies with this request. Please, try again</p>
      )}
      {search.length > 0 && <SearchList movies={search} />}
    </main>
  );
};

export default Movies;
