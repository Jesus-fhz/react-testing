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

 //Adding tasks dynamically
 const addTask = (tasks)=>{
    const inputElement = screen.getByTestId("add-input");
    const buttonElement = screen.getByRole("button",{name: /Add/i});
    tasks.forEach(element => {
        fireEvent.change(inputElement, {target:{value:element}});
        fireEvent.click(buttonElement);
    });
 }
 //Integration tests, testing how two or components behave together.
 describe("Todo component - tests",()=>{
    it("Should return a new task after adding it, using", ()=>{
       render(<MockTodo/>)
       addTask(["learning react testing", "After, we are learning web3js", "Also solidity"])
       //Getting the outer div, of the .map that renders the todos
       const divElement = screen.getAllByTestId("task-container")
       expect(divElement.length).toBeGreaterThanOrEqual(2);
    })

    it("Should return a list of  tasks after adding them", ()=>{
        render(<MockTodo/>)
      
    })

    it("Should change className style once the task is completed",()=>{
        render(<MockTodo/>)
        addTask(["After, we are learning web3js"]);
        const divElement = screen.getByTestId("task-container");
        expect(divElement).not.toHaveClass("todo-item-active");
    })

    it("Should have className todo-item-active when clicked",()=>{
        render(<MockTodo/>)
        addTask(["After, we are learning web3js"]);
        const divElement = screen.getByTestId("task-container");
        fireEvent.click(divElement);
        expect(divElement).toHaveClass("todo-item-active");
    })
 })