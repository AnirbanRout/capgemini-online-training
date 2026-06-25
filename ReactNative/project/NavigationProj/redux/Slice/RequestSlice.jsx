import { createSlice } from "@reduxjs/toolkit";

const requests = [
  {
    id: "req1",
    title: "Water leakage in kitchen",
    category: "Maintenance",
    status: "Pending",
    priority: "High",
    residentId: "r1",
    createdAt: "2026-06-25",
  },
];

const RequestSlice = createSlice({
  name: "requests",
  initialState: {
    allRequests: requests,
  },
  reducers: {
    addRequest: (state, action) => {
      state.allRequests.push(action.payload);
    },
  },
});

export default RequestSlice.reducer;
export const { addRequest } = RequestSlice.actions;
