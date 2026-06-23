import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import Stats from "../components/Stats";
import { useSelector } from "react-redux";

vi.mock("react-redux", () => ({
  useSelector: vi.fn(),
}));

describe("Stats Component", () => {
  test("renders correct employee stats", () => {
    useSelector.mockImplementation((selectorFn) =>
      selectorFn({
        employees: {
          allEmployees: [
            { name: "Anu", status: "Going" },
            { name: "Rahul", status: "Not Going" },
            { name: "Sneha", status: "Pending" },
            { name: "Kiran", status: "Going" },
          ],
        },
      }),
    );

    render(<Stats />);
    const values = screen.getAllByRole("heading", { level: 3 });
    expect(values[0].textContent).toBe("4");
    expect(values[1].textContent).toBe("2");
    expect(values[2].textContent).toBe("1");
    expect(values[3].textContent).toBe("1");
  });
});
