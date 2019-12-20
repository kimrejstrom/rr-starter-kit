import React from 'react';
import { shallow } from 'enzyme';
import App from 'app/App';

it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  const welcome = <h2>Welcome to React</h2>;
  expect(wrapper).toContainReact(welcome);
});
