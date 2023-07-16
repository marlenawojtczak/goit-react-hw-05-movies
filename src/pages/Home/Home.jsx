import { fetchTrendingMovies } from 'services/fetchData';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Loader } from '../../components';
import { HomeWrapper, TrendingList, TrendingItem } from './Home.styled';

const Home = () => {
  const [trendings, setTrendings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const movies = await fetchTrendingMovies();
        setTrendings(movies);
        setIsLoading(false);
      } catch (error) {
        console.log('Error fetching movies:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <HomeWrapper>
      <h2>Trending today</h2>
      <TrendingList>
        {trendings.map(({ id, title }) => (
          <TrendingItem key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </TrendingItem>
        ))}
      </TrendingList>
      {isLoading && <Loader />}
    </HomeWrapper>
  );
};

export default Home;
