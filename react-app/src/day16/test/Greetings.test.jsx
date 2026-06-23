import { fireEvent, render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Greetings from "../components/Greetings";

describe("Greetings Component", () => {
  test("changes button text on click", () => {
    render(<Greetings />);
    const button = screen.getByText("Click me!");

    expect(button).toBeInTheDocument();

    expect(button).toHaveTextContent("Click me!");
    fireEvent.click(button);
    expect(screen.getByText("Button clicked!")).toBeInTheDocument();
  });

  test("renders username prop", () => {
    const username = "John Doe";
    render(<Greetings username={username} />);
    expect(screen.getByText(`Username: ${username}`)).toBeInTheDocument();
  });

  // test("renders heading", () => {
  //   render(<Greetings />);
  //   const heading = screen.getByRole("heading");
  //   expect(heading).toHaveTextContent("Hello, World!");
  // });
  // test("renders button", () => {
  //   render(<Greetings />);
  //   const button = screen.getByRole("button");
  //   expect(button).toHaveTextContent("Click me!");
  // });
  // test("increments count on button click", () => {
  //   render(<Greetings />);
  //   const btn = screen.getByRole("button");
  //   fireEvent.click(btn);
  //   expect(screen.getByText("Count: 1")).toBeInTheDocument();
  // });
  // test("renders input field", () => {
  //   render(<Greetings />);
  //   const input = screen.getByPlaceholderText("Enter your name");
  //   expect(input).toBeInTheDocument();
  // });
  // test("updates name on input change", () => {
  //   render(<Greetings />);
  //   const input = screen.getByPlaceholderText("Enter your name");
  //   fireEvent.change(input, { target: { value: "John" } });
  //   expect(screen.getByText("name: John")).toBeInTheDocument();
  // });
  // test("renders checkbox", () => {
  //   render(<Greetings />);
  //   const checkbox = screen.getByRole("checkbox");
  //   expect(checkbox).toBeInTheDocument();
  // });
  // test("updates checked state on checkbox change", () => {
  //   render(<Greetings />);
  //   const checkbox = screen.getByRole("checkbox");
  //   fireEvent.click(checkbox);
  //   expect(screen.getByText("checked: true")).toBeInTheDocument();
  //   fireEvent.click(checkbox);
  //   expect(screen.getByText("checked: false")).toBeInTheDocument();
  // });
});
