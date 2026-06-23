import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach } from "vitest";
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import { resetAllStatus } from "../redux/EmployeeSlice";

vi.mock("react-redux", () => ({
  useDispatch: vi.fn(),
}));

vi.mock("../redux/EmployeeSlice", () => ({
  resetAllStatus: vi.fn(() => ({
    type: "resetAllStatus",
  })),
}));

describe("Navbar Component", () => {
  let dispatchMock;

  beforeEach(() => {
    dispatchMock = vi.fn();
    useDispatch.mockReturnValue(dispatchMock);
  });

  test("renders event details", () => {
    render(<Navbar />);

    expect(screen.getByText("Event Details")).toBeInTheDocument();
    expect(screen.getByText(/Friday Team Launch/i)).toBeInTheDocument();
    expect(screen.getByText(/Green Bowl Cafe/i)).toBeInTheDocument();
  });

  test("dispatches resetAllStatus on button click", () => {
    render(<Navbar />);

    fireEvent.click(screen.getByRole("button", { name: /reset all/i }));

    expect(dispatchMock).toHaveBeenCalledWith(resetAllStatus());
  });
});
