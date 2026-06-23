import { configureStore } from "@reduxjs/toolkit";
import ticketReducer from "./TicketSlice";

const store = configureStore({
  reducer: {
    tickets: ticketReducer,
  },
});

export default store;