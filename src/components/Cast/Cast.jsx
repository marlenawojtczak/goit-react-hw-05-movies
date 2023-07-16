import { fetchCast } from 'services/fetchData';
import { Loader } from '../../components';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, CastItem } from './Cast.styled';
import noPhotoAvailable from '../../images/no-photo-available.jpg';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const cast = await fetchCast(movieId);
        setCast(cast);
        setIsLoading(false);
      } catch (error) {
        console.log('Error fetching cast:', error);
      }
    };
    fetchData();
  }, [movieId]);

  if (!cast) {
    return null;
  }
  if (!cast || cast.length === 0) {
    return <p>No cast information available.</p>;
  }

  return (
    <>
      {isLoading && <Loader />}
      <Container>
        {cast.map(({ id, profile_path, name, original_name, character }) => (
          <CastItem key={id}>
            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                alt={original_name}
              />
            ) : (
              <img
                width={200}
                height={300}
                src={noPhotoAvailable}
                alt="No photo available"
              />
            )}
            <p>{name}</p>
            <p>Character: {character}</p>
          </CastItem>
        ))}
      </Container>
    </>
  );
};

export default Cast;
