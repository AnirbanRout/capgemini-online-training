import { createSlice } from "@reduxjs/toolkit";

const EmployeeSlice = createSlice({
  name: "employees",
  initialState: {
    allEmployees: [
      { name: "Anu", team: "UI", status: "Going" },
      { name: "rahul", team: "Backend", status: "Not Going" },
      { name: "sneha", team: "QA", status: "Pending" },
      { name: "kiran", team: "DevOps", status: "Pending" },
    ],
    statusFilter: "ALL",
  },

  reducers: {
    updateEmployeeStatus: (state, action) => {
      const { name, status } = action.payload;
      const employee = state.allEmployees.find((emp) => emp.name === name);
      if (employee) {
        employee.status = status;
      }
    },

    resetAllStatus: (state) => {
      state.allEmployees.forEach((emp) => {
        emp.status = "Pending";
      });
    },

    setStatusFilter: (state, action) => {
      state.statusFilter = action.payload;
    },
  },
});

export const { updateEmployeeStatus, resetAllStatus, setStatusFilter } =
  EmployeeSlice.actions;

export default EmployeeSlice.reducer;
