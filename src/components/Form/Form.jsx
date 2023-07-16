import PropTypes from 'prop-types';
import { useState } from 'react';
import { FormWrapper } from './Form.styled';

export const Form = ({ searchMovies }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    searchMovies(query.toLowerCase());
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <input
        type="text"
        name="query"
        autoFocus
        value={query}
        onChange={handleInputChange}
        placeholder="Search movies..."
      />
      <button type="submit">Search</button>
    </FormWrapper>
  );
};

Form.propTypes = {
  searchMovies: PropTypes.func.isRequired,
};
