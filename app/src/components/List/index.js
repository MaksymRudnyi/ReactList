import React from 'react';
import PropTypes from 'prop-types';

import Item from '../Item';
import { Container } from './styles';

const List = ({ list }) => (
  <Container>
    {list.length
      ? list.map(item => <Item key={item.id} {...item} />)
      : <h2>Sorry, there are no items.</h2>}
    {}
  </Container>
);

export default List;

List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      logo: PropTypes.string,
      city: PropTypes.string,
      speciality: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
};
