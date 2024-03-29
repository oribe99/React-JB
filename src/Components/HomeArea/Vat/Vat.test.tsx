import Vat from "./Vat";
import {cleanup, render, screen} from "@testing-library/react";
import ReactDOM from "react-dom";
import monetaryService from "../../../Services/MonetaryService";
import userEvent from "@testing-library/user-event";

describe("VAT component", () => {
    const percent = 17;
    const component = <Vat percent={percent}/>

    beforeEach(() => {
        render(component)
    });

    afterEach(() => {
        cleanup();
    })

    it("should render into DOM", () => {
       ReactDOM.render(component, document.createElement("div"));
    });

    it("should contain several element", () => {
        expect(screen.getByText("VAT Calculator")).toBeDefined(); // Get element by innerText
        expect(screen.getByTestId("main-div")).toBeDefined(); // Get element by data-testid attribute
        expect(screen.getByTitle(/Calculating vat/i)).toBeDefined(); // Get element by title
        expect(screen.getByLabelText("price", {exact: false})).toBeDefined(); // Get element by label text
        expect(screen.getByPlaceholderText("enter price")).toBeDefined(); // Get element by placeholder
    })

    it("should contain specific element type", () => {
       expect(screen.getByTitle(/calculating vat/i)).toBeInstanceOf(HTMLLabelElement);
       expect(screen.getByLabelText("price", {exact: false})).toBeInstanceOf(HTMLInputElement);
    });

    it("should contain specific css classes", () => {
       expect(screen.getByTestId("main-div")).toHaveClass("Vat Box");
    });

    it("should contain an input with type-number", () => {
        expect(screen.getByPlaceholderText("enter price")).toHaveAttribute("type", "number");
    });

    it("should init textbox with an empty string", () => {
       expect(screen.getByPlaceholderText("enter price")).toHaveDisplayValue("");
    });

    it("should calculate vat correctly", () => {
       const price = Math.floor(Math.random() * 1000);
       const vat = monetaryService.getVat(price, percent);
       userEvent.type(screen.getByPlaceholderText("enter price"), price.toString());
       expect(screen.getByRole("result")).toHaveTextContent(`${price}$ X ${percent}% = ${vat}$`);
    });

    it("should clear values when clicking clear", () => {
        const price = Math.floor(Math.random() * 1000);
        userEvent.type(screen.getByPlaceholderText("enter price"), price.toString());
        userEvent.click(screen.getByRole("button", {name : "Clear"}));
    
    })
})