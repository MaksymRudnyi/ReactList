import React from 'react';
import PropTypes from 'prop-types';

import { Content, Label } from './styles';

const Filter = ({ specialities, onFilterChange }) => (
	<Content>
		{Object.keys(specialities).map((speciality, index) => (
			<Label key={speciality+index}>
				<input
					type="checkbox"
					name={speciality}
					value={speciality}
					onChange={onFilterChange}
				/>
				{speciality}
			</Label>
		))}
	</Content>
);

export default Filter;

Filter.propTypes = {
	onFilterChange: PropTypes.func.isRequired,
	specialities: PropTypes.objectOf(PropTypes.bool),
};


