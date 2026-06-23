import { render, screen, fireEvent, within } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach } from "vitest";
import EmployeeList from "../components/EmployeeList";
import { useDispatch, useSelector } from "react-redux";
import { updateEmployeeStatus, setStatusFilter } from "../redux/EmployeeSlice";

vi.mock("react-redux", () => ({
  useDispatch: vi.fn(),
  useSelector: vi.fn(),
}));

vi.mock("../redux/EmployeeSlice", () => ({
  updateEmployeeStatus: vi.fn((p) => ({ type: "update", payload: p })),
  setStatusFilter: vi.fn((p) => ({ type: "filter", payload: p })),
}));

describe("EmployeeList Component", () => {
  let dispatchMock;

  beforeEach(() => {
    dispatchMock = vi.fn();
    useDispatch.mockReturnValue(dispatchMock);

    useSelector.mockReturnValue({
      allEmployees: [
        { name: "Anu", team: "UI", status: "Going" },
        { name: "Rahul", team: "Backend", status: "Not Going" },
        { name: "Sneha", team: "QA", status: "Pending" },
      ],
      statusFilter: "ALL",
    });
  });

  test("renders employees", () => {
    render(<EmployeeList />);

    expect(screen.getByText("Anu")).toBeInTheDocument();
    expect(screen.getByText("Rahul")).toBeInTheDocument();
    expect(screen.getByText("Sneha")).toBeInTheDocument();
  });

  test("filters Not Going correctly", () => {
    render(<EmployeeList />);

    const buttons = screen.getAllByRole("button");

    const notGoingBtn = buttons.find((b) => b.textContent === "Not Going");

    fireEvent.click(notGoingBtn);

    expect(dispatchMock).toHaveBeenCalledWith(setStatusFilter("Not Going"));
  });

  test("updates employee status to Going", () => {
    render(<EmployeeList />);

    const row = screen.getByText("Anu").closest("tr");
    const goingBtn = within(row).getByRole("button", { name: "Going" });

    fireEvent.click(goingBtn);

    expect(dispatchMock).toHaveBeenCalledWith(
      updateEmployeeStatus({
        name: "Anu",
        status: "Going",
      }),
    );
  });
});
