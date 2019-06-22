import React from 'react';

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


