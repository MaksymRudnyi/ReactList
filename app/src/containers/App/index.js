import React, { useState, useEffect, Fragment } from 'react';

import Header from '../../components/Header';
import List from '../../components/List';
import { withAppContext } from '../../store/context'

const App = ({context}) => {
  const [ searchTerm, setTerm ] = useState('');
  const [ companies, filterCompanies ] = useState(context.companies);
  const [ specialities, setSpecialities ] = useState([]);

  const [ filteredSpecialities, setFilteredSpecialities ] = useState([]);

  const onChange = (e) => setTerm(e.currentTarget.value);
  const onFilterChange = (e) => {
  	const { value, checked } = e.target;
  	const f = new Set(filteredSpecialities);

  	checked ? f.add(value) : f.delete(value);

		setFilteredSpecialities(Array.from(f));
	};

  useEffect(() => {
		setSpecialities(getSpecialities(context.companies));
	}, [context.companies]);

	useEffect(() => {
		let result = [...context.companies];

		if (filteredSpecialities.length) {
			result = result.filter(company => filteredSpecialities.every(i => company.speciality.indexOf(i) !== -1));
		}

		if (searchTerm.length >= 3) {
			result = result.filter(company => company.name.toLowerCase().search(searchTerm.toLowerCase()) !== -1);
    }

		filterCompanies(result);
	}, [ searchTerm, filteredSpecialities, context.companies ]);

  return (
    <Fragment>
      <Header
				term={searchTerm}
				onChange={onChange}
				specialities={specialities}
				onFilterChange={onFilterChange}
			/>
      <List list={ companies } />
    </Fragment>
  );
};

export default withAppContext(App);

const getSpecialities = companies => {
	const specialities = new Set();

	companies.forEach(company => {
		company.speciality.forEach(speciality => specialities.add(speciality))
	});

	return Array.from(specialities);
};