import React from 'react';
import toJson from 'enzyme-to-json';

import { shallow, mount } from 'enzyme';

import List from './';

describe('List', () => {
	let sut;
	let props;

	const data = [
		{
			id: 1,
			name: 'Company one',
			logo: '',
			city: 'Berlin',
			speciality: ['Excavations', 'Plumbing', 'Electrical'],
		},
		{
			id: 2,
			name: 'Company two',
			logo: '',
			city: 'Munich',
			speciality: ['Excavations', 'Electrical'],
		},
	];

	props = {
		list: data,
	};

	it('should match snapshot', () => {
		sut = shallow(<List {...props} />);

		expect(toJson(sut)).toMatchSnapshot();
	});

	it('should match snapshot with empty data', () => {
		props = {
			list: [],
		};

		sut = shallow(<List {...props} />);

		expect(toJson(sut)).toMatchSnapshot();
	});
});
