import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
  render(<CheckoutForm />);
  const header = screen.queryByText(/checkout form/i);
  expect(header).toBeTruthy();
  expect(header).toBeInTheDocument();
  expect(header).toHaveTextContent(/checkout form/i);
});

test("shows success message on submit with form details", async () => {
    render(<CheckoutForm />);
    const firstNameInput = screen.getByLabelText(/first name:/i);
    userEvent.type(firstNameInput, "Desiree");
    const lastNameInput = screen.getByLabelText(/last name:/i);
    userEvent.type(lastNameInput, "Garcia");
    const addressInput = screen.getByLabelText(/address:/i);
    userEvent.type(addressInput,"123 Home Dr");
    const cityInput = screen.getByLabelText(/city:/i);
    userEvent.type(cityInput, "Whereilive");
    const stateInput = screen.getByLabelText(/state:/i);
    userEvent.type(stateInput, "Home State");
    const zipInput = screen.getByLabelText(/zip:/i);
    userEvent.type(zipInput, "12345");
    const button = screen.getByRole("button");
    userEvent.click(button);
    await waitFor (() => {
        const checkoutMessage = screen.queryByTestId("successMessage");
        expect(checkoutMessage).toBeInTheDocument();
    });

});
