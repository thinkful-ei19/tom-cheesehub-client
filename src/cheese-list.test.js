import React from 'react';
import ReactDOM from 'react-dom';
import CheeseList from './components/cheese-list';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CheeseList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
