import axios from 'axios';
const API_KEY = '4c48f56c563cad897bb4af72634cd546';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  const trendingMovies = response.data.results;
  return trendingMovies;
};

export const fetchMovies = async keyword => {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&include_adult=false&language=en-US&page=1&query=${keyword}`
  );
  const movies = response.data.results;
  return movies;
};

export const fetchMovieDetails = async movieId => {
  const response = await axios.get(
    `movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  const movieDetails = response.data;
  return movieDetails;
};

export const fetchCast = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  const cast = response.data.cast;
  return cast;
};

export const fetchReviews = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  const reviews = response.data.results;
  return reviews;
};
