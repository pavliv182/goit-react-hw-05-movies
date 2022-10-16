import { useState } from 'react';
import PropTypes from 'prop-types';

function SearchForm({ formSubmit }) {
  const [query, setQuery] = useState('');

  const handleChange = e => setQuery(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
    formSubmit({ query });
    setQuery('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={query}
        type="text"
        onChange={handleChange}
        placeholder="Enter Movie Name"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;

SearchForm.propTypes = {
  formSubmit: PropTypes.func.isRequired,
};
