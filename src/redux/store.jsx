import { configureStore } from "@reduxjs/toolkit";
import EmployeesReducer from "./employees.slice";

export const store = configureStore({
  reducer: {
    employees: EmployeesReducer,
  },
});

export default store;
