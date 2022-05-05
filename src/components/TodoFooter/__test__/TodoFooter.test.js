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

it("Should render the correct amount of imcomplete tasks",() => {
     render(<MockTodoFooter numberOfIncompleteTasks={5} />);
     const parragraphElement = screen.getByText(/5 tasks left/i);
     expect(parragraphElement).toBeInTheDocument();
})