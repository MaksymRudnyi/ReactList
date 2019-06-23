import React from 'react';
import PropTypes from 'prop-types';

import { Input } from './styles';

const Search = ({ term, onChange }) => (
  <Input
    type="text"
    value={term}
    onChange={onChange}
    placeholder="Company name (min. 3 chars)"
    autoFocus
  />
);

export default Search;

Search.propTypes = {
  term: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
