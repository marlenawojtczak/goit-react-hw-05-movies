import { fetchMovieDetails } from 'services/fetchData';
import { useState, useEffect } from 'react';
import { Outlet, useParams, useLocation, Link } from 'react-router-dom';
import { Loader } from '../../components';
import {
  Wrapper,
  Container,
  ListInfo,
  LinkInfo,
  Button,
} from './MovieDetails.styled';
import noPosterAvailable from '../../images/no-poster-available.jpg';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [details, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const details = await fetchMovieDetails(movieId);
        setDetails(details);
        setIsLoading(false);
      } catch (error) {
        console.log('Error fetching detials:', error);
      }
    };
    fetchData();
  }, [movieId]);

  if (!details) {
    return null;
  }

  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = details;

  const releaseYear = new Date(release_date).getFullYear();
  const userScore = Math.round(vote_average * 10);
  const genreNames = genres.map(genre => genre.name);

  return (
    <>
      <Link to={location.state?.from ?? '/'}>
        <Button type="button">Go back</Button>
      </Link>
      <Container>
        {poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            alt={original_title}
          />
        ) : (
          <img src={noPosterAvailable} alt="No poster avialable" />
        )}
        <div>
          <h1>
            {original_title} ({releaseYear})
          </h1>
          <p>User score: {userScore}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h2>Genres</h2>
          <p>{genreNames.join(', ')}</p>
        </div>
      </Container>

      {isLoading && <Loader />}
      <hr />
      <Wrapper>
        <h3>Additional information</h3>
        <ListInfo>
          <li>
            <LinkInfo to="cast">Cast</LinkInfo>
          </li>
          <li>
            <LinkInfo to="reviews">Reviews</LinkInfo>
          </li>
        </ListInfo>
        <hr />
        <Outlet />
      </Wrapper>
    </>
  );
};

export default MovieDetails;
