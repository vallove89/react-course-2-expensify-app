import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';
import { LoginPage } from '../../components/LoginPage';

test('should render Header correctly', () => {
  const wrapper = shallow(<Header startLogout={() => {}}/>);
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
  const startLogin = jest.fn();
  const wrapper = shallow(<LoginPage startLogin={startLogin} />);
  wrapper.find('button').simulate('click');
  expect(startLogin).toHaveBeenCalled();
});