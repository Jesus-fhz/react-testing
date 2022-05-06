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

describe("FollowersList component - tests",() => {
    it("Should render the first user", async  ()=>{
        render(<MockFollwersList/>)
        const userFirstElement =  await screen.findByTestId('user-item-0');
        expect(userFirstElement).toBeInTheDocument();
    })

    it("Shoul render all users,(at least 5)", async  ()=>{
        render(<MockFollwersList/>)
        const userAllElements =  await screen.findAllByTestId(/user-item/i);
        expect(userAllElements.length).toBeGreaterThanOrEqual(5);
    })
})

