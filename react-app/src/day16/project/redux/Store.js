import { configureStore } from "@reduxjs/toolkit";
import EmployeeSlice from "./EmployeeSlice";

const Store=configureStore({
    reducer: {
        employees: EmployeeSlice
    }
})

export default Store;