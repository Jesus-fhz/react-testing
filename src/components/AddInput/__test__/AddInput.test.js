import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import AddInput from "../AddInput";

//Better way to do the mocking insted of doing it directly in the prop like setTodos={()=>{}}
const mockedSetTodos = jest.fn();

describe("Add Input - todo- Tests",() => {
    //Describing what we want to test
    it('Should  render input element', () => {
      render(
        
        <AddInput  todos={[]}  setTodos={mockedSetTodos}/>
        );
      const addInput = screen.getByTestId("add-input");
      expect(addInput).toBeInTheDocument();
    });

    it('Should change value when typing', () => {
      render(
        <AddInput  todos={[]}  setTodos={mockedSetTodos}/>
        );
      const addInput = screen.getByTestId("add-input");
      //##UserEvent will dispatch events they way an user will inreact with our APP
      userEvent.type(addInput,"Value is changing")

      //##Fire Event is more low level api, since UserEvent uses fire event under the hood
      //FireEvent will dispatches exactly the events you tell it to and just those;
      //Even if those exact events never had been dispatched in a real interaction in a browser.
      //fireEvent.change(addInput, {target: { value:"Value is changing"}});
      expect(addInput.value).toBe("Value is changing");
    });

    it('Should clean value when add input is clicked', () => {
      render(
        <AddInput  todos={[]}  setTodos={mockedSetTodos}/>
        );
      const addInput = screen.getByTestId("add-input");
      const addButton = screen.getByRole("button",{name: /add/i});
      userEvent.click(addButton)
      //fireEvent.change(addInput, {target: { value:"Value is changing"}});
      expect(addInput.value).toBe("");
    });
});