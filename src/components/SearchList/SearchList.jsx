import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { List, ListItem } from './SearchList.styled';

export const SearchList = ({ movies }) => {
  const location = useLocation();

  return (
    <List>
      {movies.map(movie => (
        <ListItem key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

SearchList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
