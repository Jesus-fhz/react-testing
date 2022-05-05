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


// test('Should render a role Heading', () => {
//   render(<Header title="My header"/>);
//   const headerElement = screen.getByRole("heading");
//   expect(headerElement).toBeInTheDocument();
// });

// //By heading and their text  content
// test('Should render a heading role', () => {
//   render(<Header title="My header"/>);
//   const headerElement = screen.getByRole("heading",{name: "My header"});
//   expect(headerElement).toBeInTheDocument();
// });


// //By title
// test('Should render by Title', () => {
//   render(<Header title="My header"/>);
//   const headerElement = screen.getByTitle('Header');
//   expect(headerElement).toBeInTheDocument();
// });



// //By ID
// test('Should render by id', () => {
//   render(<Header title="My header"/>);
//   const headerElement = screen.getByTestId('header-1');
//   expect(headerElement).toBeInTheDocument();
// });

// //Find By
// it('Should render using FindBy', async () =>  {
//   render(<Header title="My header"/>);
//   const headerElement =  await screen.findByText(/my header/i);
//   expect(headerElement).toBeInTheDocument();
// });


// //QueryBy
// it('Should render using QueryBy', async () =>  {
//   render(<Header title="My header"/>);
//   const headerElement =  screen.queryByTestId(/dogs/i);
//   expect(headerElement).not.toBeInTheDocument();
// });

// //Get All by
// it('Should render using GetAllBy', async () =>  {
//   render(<Header title="My header"/>);
//   const headerElement =  screen.getAllByRole('heading');
//   expect(headerElement.length).toBeGreaterThan(1)
// });
