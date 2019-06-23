import { useState } from 'react';

const useFilter = (companies) => {
	const [ result, setResult ] = useState(companies);

	const handleFilter = (term, specialities) => {
		let list = [...companies];
		const selectedSpecialities = Object.keys(specialities).filter(item => specialities[item]);

		if (selectedSpecialities.length) {
			list = list.filter(company => selectedSpecialities.every(i => company.speciality.indexOf(i) !== -1));
		}

		if (term.length >= 3) {
			list = list.filter(company => company.name.toLowerCase().search(term.toLowerCase()) !== -1);
		}

		setResult(list);
	};

	return [
		result,
		handleFilter,
	];
};

export default useFilter;
