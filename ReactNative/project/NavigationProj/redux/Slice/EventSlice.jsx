import { createSlice } from "@reduxjs/toolkit";

const events = [
  {
    id: "e1",
    name: "Yoga Session",
    date: "2026-06-28",
    venue: "Club House",
  },
];

const EventSlice = createSlice({
  name: "events",
  initialState: {
    allEvents: events,
  },
  reducers: {
    addEvent: (state, action) => {
      state.allEvents.push(action.payload);
    },
  },
});

export default EventSlice.reducer;
export const { addEvent } = EventSlice.actions;
