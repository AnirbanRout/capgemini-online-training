import { configureStore } from "@reduxjs/toolkit";
import residentReducer from "../Slice/ResidentSlice";
import requestReducer from "../Slice/RequestSlice";
import announcementReducer from "../Slice/AnnouncementSlice";
import eventReducer from "../Slice/EventSlice";

export const store = configureStore({
  reducer: {
    residents: residentReducer,
    requests: requestReducer,
    announcements: announcementReducer,
    events: eventReducer,
  },
});

export default store;
