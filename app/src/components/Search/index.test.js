import React from 'react';
import toJson from 'enzyme-to-json';

import { shallow, mount } from 'enzyme';

import Search from './';

describe('Search', () => {
	let sut;

	it('should match snapshot', () => {
		sut = shallow(<Search onChange={()=>{}}/>);

		expect(toJson(sut)).toMatchSnapshot();
	});

	it('should match snapshot with predefined term', () => {
		sut = shallow(<Search term="search term" onChange={()=>{}} />);

		expect(toJson(sut)).toMatchSnapshot();
	});

	it('should call onChange handler when data is changed', () => {
		const onChange = jest.fn();

		sut = mount(<Search term="search term" onChange={onChange} />);

		const input = sut.find('input[type="text"]');

		input.simulate('change', { target: { value: 'company' } });

		expect(onChange).toHaveBeenCalled();
	})
});
