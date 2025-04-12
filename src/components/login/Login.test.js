import { render, screen } from "@testing-library/react";
import Login from "./Login";

test("Username input should be rendered", () => {
  render(<Login></Login>);

  const userInputEl = screen.getByPlaceholderText(/username/i);
  expect(userInputEl).toBeInTheDocument();
});

test("Password input should be rendered", () => {
  render(<Login></Login>);

  const pwInputEl = screen.getByPlaceholderText(/password/i);
  expect(pwInputEl).toBeInTheDocument();
});

test("Button input should be rendered", () => {
  render(<Login></Login>);

  const buttonInputEl = screen.getByRole(/button/);
  expect(buttonInputEl).toBeInTheDocument();
});
