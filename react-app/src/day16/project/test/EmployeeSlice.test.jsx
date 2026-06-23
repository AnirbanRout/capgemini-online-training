import reducer, {
  updateEmployeeStatus,
  resetAllStatus,
  setStatusFilter,
} from "../redux/EmployeeSlice";

import { describe, test, expect } from "vitest";

describe("EmployeeSlice reducers", () => {
  const initialState = {
    allEmployees: [
      { name: "Anu", team: "UI", status: "Going" },
      { name: "rahul", team: "Backend", status: "Not Going" },
      { name: "sneha", team: "QA", status: "Pending" },
      { name: "kiran", team: "DevOps", status: "Pending" },
    ],
    statusFilter: "ALL",
  };

  test("should update employee status correctly", () => {
    const state = reducer(
      initialState,
      updateEmployeeStatus({
        name: "Anu",
        status: "Pending",
      }),
    );

    expect(state.allEmployees[0].status).toBe("Pending");
  });

  test("should reset all employee status to Pending", () => {
    const state = reducer(initialState, resetAllStatus());

    const allPending = state.allEmployees.every(
      (emp) => emp.status === "Pending",
    );

    expect(allPending).toBe(true);
  });

  test("should update status filter", () => {
    const state = reducer(initialState, setStatusFilter("Going"));

    expect(state.statusFilter).toBe("Going");
  });
});
