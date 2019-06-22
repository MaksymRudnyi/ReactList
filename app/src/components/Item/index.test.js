import React from 'react';
import toJson from 'enzyme-to-json';

import { shallow } from 'enzyme';

import Item from './';

describe('Item', () => {
	let sut;
	let props = {
		id: 1,
		name: 'Company one',
		logo: '',
		city: 'Berlin',
		speciality: ['Excavations', 'Plumbing', 'Electrical'],
	};

	it('should match snapshot', () => {
		sut = shallow(<Item {...props} />);

		expect(toJson(sut)).toMatchSnapshot();
	});
});
