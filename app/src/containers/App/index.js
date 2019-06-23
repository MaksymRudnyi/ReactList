import React, { useState, useEffect } from 'react';

import ErrorBoundary from '../../components/ErrorBoundary';
import Header from '../../components/Header';
import List from '../../components/List';
import { withAppContext } from '../../store/context'

import useFilter from '../../hooks/useFilter';
import useSpecialities from '../../hooks/useSpecialities';

const App = ({context}) => {
  const [ searchTerm, setTerm ] = useState('');
	const [ companies, handleFilter ] = useFilter(context.companies);
	const [ specialities, handleSpeciality ] = useSpecialities(context.companies);

  const onChange = (e) => setTerm(e.currentTarget.value);
  const onFilterChange = (e) => {
  	const { value, checked } = e.target;

		handleSpeciality(value, checked);
	};

	useEffect(() => {
		handleFilter(searchTerm, specialities);
	}, [ searchTerm, specialities ]);

  return (
    <ErrorBoundary>
      <Header
				term={searchTerm}
				onChange={onChange}
				specialities={specialities}
				onFilterChange={onFilterChange}
			/>
      <List list={ companies } />
    </ErrorBoundary>
  );
};

export default withAppContext(App);
