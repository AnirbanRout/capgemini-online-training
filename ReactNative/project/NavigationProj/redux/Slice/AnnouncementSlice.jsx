import { createSlice } from "@reduxjs/toolkit";

const announcements = [
  {
    id: "a1",
    title: "Water supply interruption",
    type: "Notice",
    date: "2026-06-26",
  },
];

const AnnouncementSlice = createSlice({
  name: "announcements",
  initialState: {
    allAnnouncements: announcements,
  },
  reducers: {
    addAnnouncement: (state, action) => {
      state.allAnnouncements.push(action.payload);
    },
  },
});

export default AnnouncementSlice.reducer;
export const { addAnnouncement } = AnnouncementSlice.actions;
