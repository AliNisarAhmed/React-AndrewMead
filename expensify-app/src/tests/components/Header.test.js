import React from 'react';
import { shallow } from 'enzyme';  // we have switched from react-test-renderer to enzyme
import Header from '../../components/Header';
// import toJSON from 'enzyme-to-json';  // Removed as the toJSON already incorporated in enzyme config file

test('should render Header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();


  // expect(wrapper.find('h1').text()).toBe('Expensify');
  
  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
});