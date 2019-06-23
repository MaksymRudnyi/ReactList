import React from 'react';
import toJson from 'enzyme-to-json';

import { shallow } from 'enzyme';

import Filter from './';

describe('Item', () => {
	let sut;
	let props = {
		specialities: ['Excavations', 'Plumbing', 'Electrical'],
		onFilterChange: jest.fn(),
	};

	it('should match snapshot', () => {
		sut = shallow(<Filter {...props} />);

		expect(toJson(sut)).toMatchSnapshot();
	});
});
