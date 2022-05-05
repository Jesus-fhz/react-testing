import { render, screen } from '@testing-library/react';
import Header from '../Header';

//Describing what we want to test
test('Should render same text into title prop', () => {
  //callback: Logic to execute test
  
  //Component to test
  render(<Header title="My header"/>);

  //Elements we want to test
  const headerElement = screen.getByText(/my header/i);

  //Interecting with the elements 
  expect(headerElement).toBeInTheDocument();
});


