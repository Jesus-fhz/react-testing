import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";

//We create a MockComponent, so we can add the router
//Otherwise it will fail, since the Component it's insde a router definition.
//We can still pass props to a mock component
const MockTodoFooter = ({numberOfIncompleteTasks}) =>{
    return (
        //We wrap the component that we want to test inside the BrowserRouter Component
        <BrowserRouter>
            <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
        </BrowserRouter>
    )
 }

describe("Todo Footer Tests", () => {
	//It should render TASKS plural when there are more than 1 tasks left to complete
		it("Should render the correct amount of imcomplete tasks",() => {
			render(<MockTodoFooter numberOfIncompleteTasks={5} />);
			const parragraphElement = screen.getByText(/5 tasks left/i);
			expect(parragraphElement).toBeInTheDocument();
		})

		//It should render TASKS plural when there are more than 1 tasks left to complete
		it("Should render TASK singular when number of complete of task is just one",() => {
		render(<MockTodoFooter numberOfIncompleteTasks={1} />);
		const parragraphElement = screen.getByText(/1 task left/i);
		expect(parragraphElement).toBeInTheDocument();
		})

		//It should render TASKS plural when there are more than 1 tasks left to complete
		it("Should render element, needs to be visible for the user",() => {
		render(<MockTodoFooter numberOfIncompleteTasks={1} />);
		const parragraphElement = screen.getByText(/1 task left/i);
		expect(parragraphElement).toBeVisible();
		})

		//It should render TASKS plural when there are more than 1 tasks left to complete
		it("Should  render a p Tag",() => {
		render(<MockTodoFooter numberOfIncompleteTasks={1} />);
		const parragraphElement = screen.getByText(/1 task left/i);
		expect(parragraphElement).toContainHTML("p");
		})

		//Using assertion NOT we can get the opposite of what we want
		it("Should't be false",() => {
		render(<MockTodoFooter numberOfIncompleteTasks={1} />);
		const parragraphElement = screen.getByText(/1 task left/i);
		expect(parragraphElement).not.toBeFalsy();
		})

		//Since we are selecting an element we can have access to all its attributes like textContent
		it("Should render n task lefts depending on its props",() => {
		render(<MockTodoFooter numberOfIncompleteTasks={1} />);
		const parragraphElement = screen.getByTestId('taskParagraph');
		expect(parragraphElement.textContent).toBe("1 task left")
		})

})
