import React from 'react';
import toJson from 'enzyme-to-json';

import { shallow } from 'enzyme';

import Header from './';

describe('Item', () => {
	let sut;
	let props = {
		specialities: ['Excavations', 'Plumbing', 'Electrical'],
		onFilterChange: jest.fn(),
		onChange: jest.fn(),
		searchTerm: '',
	};

	it('should match snapshot', () => {
		sut = shallow(<Header {...props} />);

		expect(toJson(sut)).toMatchSnapshot();
	});
});
