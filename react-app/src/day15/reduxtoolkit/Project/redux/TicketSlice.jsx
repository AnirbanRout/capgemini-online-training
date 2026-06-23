import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allTickets: [
    {
      id: "T101",
      customerName: "Riya Sharma",
      issueTitle: "Unable to reset password",
      description: "Customer is not receiving password reset email.",
      status: "Open",
      priority: "High",
      assignedTo: "Aman",
      starred: false,
    },
    {
      id: "T102",
      customerName: "Karan Mehta",
      issueTitle: "Subscription payment failed",
      description: "Payment gets declined even though card is valid.",
      status: "In Progress",
      priority: "Medium",
      assignedTo: "Sneha",
      starred: true,
    },
    {
      id: "T103",
      customerName: "Neha Iyer",
      issueTitle: "App crashes on login",
      description: "App closes immediately after login.",
      status: "Open",
      priority: "High",
      assignedTo: "Rahul",
      starred: false,
    },
    {
      id: "T104",
      customerName: "Arjun Rao",
      issueTitle: "Unable to download invoice",
      description: "Download button not working.",
      status: "Resolved",
      priority: "Low",
      assignedTo: "Megha",
      starred: false,
    },
    {
      id: "T105",
      customerName: "Pooja Nair",
      issueTitle: "Profile update not saving",
      description: "Changes disappear after refresh.",
      status: "In Progress",
      priority: "Medium",
      assignedTo: "Aman",
      starred: true,
    },
  ],
  selectedTicketId: null,
  activeFilter: "All",
};

const ticketSlice = createSlice({
  name: "tickets",
  initialState: initialState,
  reducers: {
    addTicket: (state, action) => {
      state.allTickets.push(action.payload);
    },

    selectTicket: (state, action) => {
      state.selectedTicketId = action.payload;
    },

    toggleStar: (state, action) => {
      const ticket = state.allTickets.find((t) => t.id === action.payload);
      if (ticket) {
        ticket.starred = !ticket.starred;
      }
    },

    // setFilter: (state, action) => {
    //   state.activeFilter = action.payload;
    // },

    updateStatus: (state, action) => {
      const { id, status } = action.payload;
      const ticket = state.allTickets.find((t) => t.id === id);
      if (ticket) {
        ticket.status = status;
      }
    },

    updatePriority: (state, action) => {
      const { id, priority } = action.payload;
      const ticket = state.allTickets.find((t) => t.id === id);
      if (ticket) {
        ticket.priority = priority;
      }
    },
  },
});

export const {
  addTicket,
  selectTicket,
  toggleStar,
  setFilter,
  updateStatus,
  updatePriority,
} = ticketSlice.actions;

export default ticketSlice.reducer;
