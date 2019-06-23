import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, Logo, Content, Name,
} from './styles';

const Item = ({
  name, logo, city, speciality, id,
}) => (
  <Container>
    <Logo logo={logo} />
    <Content>
      <Name>{name}</Name>
      <p>
        City:
        {' '}
        {city}
      </p>
      <p>
        Speciality:
        {speciality.map(special => (
          <span key={special + id}>
            {special}
            {', '}
          </span>
        ))}
      </p>
    </Content>
  </Container>
);

export default Item;

Item.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  logo: PropTypes.string,
  city: PropTypes.string,
  speciality: PropTypes.arrayOf(PropTypes.string),
};
