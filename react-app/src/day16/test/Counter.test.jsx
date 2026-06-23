import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter";
import { describe, test, expect } from "vitest";

describe("Counter Component", () => {
  test("renders initial count as 0", () => {
    render(<Counter />);
    expect(screen.getByText("Counter: 0")).toBeInTheDocument();
  });

  test("increments count when Increment button is clicked", () => {
    render(<Counter />);
    const incrementBtn = screen.getByText("Increment");
    fireEvent.click(incrementBtn);
    expect(screen.getByText("Counter: 1")).toBeInTheDocument();
  });

  test("decrements count when Decrement button is clicked", () => {
    render(<Counter />);
    const decrementBtn = screen.getByText("Decrement");
    fireEvent.click(decrementBtn);
    expect(screen.getByText("Counter: -1")).toBeInTheDocument();
  });

  test("increments multiple times", () => {
    render(<Counter />);
    const incrementBtn = screen.getByText("Increment");
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    fireEvent.click(incrementBtn);
    expect(screen.getByText("Counter: 3")).toBeInTheDocument();
  });
});
