 import {render, screen, fireEvent} from "@testing-library/react"
 import userEvent from '@testing-library/user-event';
 import { BrowserRouter } from "react-router-dom"
 import Todo from "../Todo"

 const MockTodo = ({numberOfIncompleteTasks}) =>{
    return (
        //We wrap the component that we want to test inside the BrowserRouter Component
        <BrowserRouter>
            <Todo  />
        </BrowserRouter>
    )
 }
 describe("Todo component - tests",()=>{
    it("Should render something", ()=>{
       render(<MockTodo/>)
       const inputElement = screen.getByTestId("add-input");
       const buttonElement = screen.getByRole("button",{name: /Add/i});
       fireEvent.change(inputElement, {target:{value:"Learning testing in react"}});
       fireEvent.click(buttonElement);
       //Getting the outer div, of the .map that renders the todos
       const divElement = screen.getByTestId("todo-list-body");
       expect(divElement).toBeInTheDocument();
       expect(divElement.textContent).toBe("Learning testing in react");
    })

 })