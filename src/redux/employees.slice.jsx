import { createSlice } from "@reduxjs/toolkit";
import employees_list from "../data/employees-list.json";

// const initialState = [];
const initialState = employees_list;

export const EmployeesSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addEmployee } = EmployeesSlice.actions;
export default EmployeesSlice.reducer;
