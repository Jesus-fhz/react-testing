import {render, screen} from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import FollowersList from "../FollowersList"

const MockFollwersList = () => {
    return (
        <BrowserRouter>
            <FollowersList/>
        </BrowserRouter>
    )
}
const currentComponent = () => render(<MockFollwersList/>);
describe("FollowersList component - tests",() => {

    let userFirstElement;
    let userAllElements;
    
    //BeforeEach It will execute each time before each test
    beforeEach(async () =>  {
        currentComponent();
        userFirstElement =  await screen.findByTestId('user-item-0');
        userAllElements =  await screen.findAllByTestId(/user-item/i);
    })

    //BeforeAll will execute one time before all test are run.
    beforeAll(()=>{
        console.log("I run first, before all the tests run")
    })

    //afterEach it will run after each test has been run
    afterEach(()=>{
        console.log("I run after every test has been run")
    })

    //After all will run after each test has been run.
    afterAll(()=>{
        console.log("I will run once all test has been finished")
    })

    it("Should render the first user", async  ()=>{
        expect(userFirstElement).toBeInTheDocument();
    })

    it("Shoul render all users,(at least 5)", async  ()=>{
        expect(userAllElements.length).toBeGreaterThanOrEqual(5);
    })
})

