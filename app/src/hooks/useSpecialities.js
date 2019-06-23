import { useState } from 'react';

const useSpecialities = (companies) => {
	const clearSpecialities = getSpecialities(companies);
	const [ specialities, setSpecialities ] = useState(clearSpecialities);

	const handleSpecialities = (key, value) => {
		setSpecialities({
			...specialities,
			[key]: value,
		})
	};

	return [
		specialities,
		handleSpecialities,
	];
};

export default useSpecialities;

const getSpecialities = companies => {
	const specialities = {};

	companies.forEach(company => {
		company.speciality.forEach(speciality => specialities[speciality] = false)
	});

	return specialities;
};
