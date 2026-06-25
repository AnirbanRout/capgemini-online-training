import { createSlice } from "@reduxjs/toolkit";

const residents = [
  {
    id: "r1",
    name: "Aarav Sharma",
    flatNo: "B-504",
    phone: "9876543210",
    email: "aarav@email.com",
  },
];

const ResidentSlice = createSlice({
  name: "residents",
  initialState: {
    allResidents: residents,
  },
  reducers: {
    addResident: (state, action) => {
      state.allResidents.push(action.payload);
    },
    updateResident: (state, action) => {
      const resident = state.allResidents.find(
        (resident) => resident.id === action.payload.id,
      );
      if (resident) {
        // resident.name = action.payload.name;
        // resident.flatNo = action.payload.flatNo;
        // resident.phone = action.payload.phone;
        // resident.email = action.payload.email;
        Object.assign(resident, action.payload);
      }
    },
  },
});

export default ResidentSlice.reducer;
export const { addResident, updateResident } = ResidentSlice.actions;
