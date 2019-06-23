import React from 'react';
import toJson from 'enzyme-to-json';

import { mount } from 'enzyme';
import App from './';

describe('App', () => {
	let sut;

	it('should match snapshot', () => {
		sut = mount(<App />);

		expect(toJson(sut)).toMatchSnapshot();
	});
});
