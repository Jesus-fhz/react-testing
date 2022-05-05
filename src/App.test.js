import { render, screen } from '@testing-library/react';
import App from './App';

//Describing what we want to test
test('renders learn react link', () => {
  //callback: Logic to execute test
  
  //Component to test
  render(<App />);

  //Elements we want to test
  const linkElement = screen.getByText(/learn react/i);

  //Interecting with the elements
  expect(linkElement).toBeInTheDocument();
});


