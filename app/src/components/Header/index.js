import React from 'react';
import PropTypes from 'prop-types';

import Filter from '../../components/Filter';
import Search from '../../components/Search';
import { Container, Content } from './styles';

const Header = ({searchTerm, specialities, onChange, onFilterChange}) => (
	<Container>
		<Content>
			<Search
				term={searchTerm}
				onChange={onChange}/>

			<Filter
				specialities={specialities}
				onFilterChange={onFilterChange}
			/>
		</Content>
	</Container>
);

export default Header

Header.propTypes = {
	searchTerm: PropTypes.string,
	specialities: PropTypes.objectOf(PropTypes.bool),
	onFilterChange: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
};
