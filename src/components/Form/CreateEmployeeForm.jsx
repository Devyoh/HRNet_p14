import { useRef, useState } from "react";

import { useDispatch } from "react-redux";
import { addEmployee } from "../../redux/employees.slice";

import { STATES_OPTIONS, DEPARTMENTS_OPTIONS } from "../../data/data";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import Modal from "react-modal-devyoh";
import "react-modal-devyoh/dist/index.css";

const CreateEmployeeForm = () => {
  const dispatch = useDispatch();
  const refForm = useRef(null);
  const [openModal, setOpenModal] = useState(false);
  const [employeeForm, setEmployeeForm] = useState({
    firstName: null,
    lastName: null,
    birth: null,
    startDate: null,
    street: null,
    city: null,
    state: null,
    zipCode: null,
    department: null,
  });

  const modal_content = {
    title: "Perfect !",
    text: `Employee ${employeeForm.firstName} created successfully !`,
  };

  const handdleChange = (id, value) => {
    setEmployeeForm((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handdleSubmit = (e) => {
    e.preventDefault();
    refForm.current.reset();
    dispatch(addEmployee(employeeForm));
    setOpenModal(true);
  };

  return (
    <div className="container m-auto my-1 ">
      <form action="#" id="create-employee" className="w-1/3 border rounded-md px-10 py-3 text-center" ref={refForm}>
        <h2 className="text-lg">Create Employee</h2>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          onChange={(e) => handdleChange(e.target.id, e.target.value)}
          className="border rounded-md w-auto text-black p-1"
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          onChange={(e) => handdleChange(e.target.id, e.target.value)}
          className="border rounded-md w-auto p-1"
        />

        <label htmlFor="birth">Date of Birth</label>
        <DatePicker
          id="birth"
          className="border rounded-md w-auto p-1"
          selected={employeeForm.birth ? new Date(employeeForm.birth) : null}
          onChange={(date) => {
            handdleChange("birth", date.toJSON());
          }}

        />

        <label htmlFor="startDate">Start Date</label>
        <DatePicker
          id="startDate"
          className="border rounded-md w-auto p-1"
          selected={
            employeeForm.startDate ? new Date(employeeForm.startDate) : null
          }
          onChange={(date) => {
            handdleChange("startDate", date.toJSON());
          }}
        />

        <fieldset className="address border">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input
            id="street"
            type="text"
            onChange={(e) => handdleChange(e.target.id, e.target.value)}
            className="border rounded-md w-auto p-1"
          />

          <label htmlFor="city">City</label>
          <input
            id="city"
            type="text"
            onChange={(e) => handdleChange(e.target.id, e.target.value)}
            className="border rounded-md w-auto p-1"
          />

          <label>State</label>
          <Dropdown
            className="w-1/2 m-auto"
            options={STATES_OPTIONS}
            placeholder="Select State"
            onChange={(e) => {
              handdleChange("state", e.value);
            }}
          />

          <label htmlFor="zipCode">Zip Code</label>
          <input
            id="zipCode"
            type="number"
            onChange={(e) => handdleChange(e.target.id, e.target.value)}
            className="border rounded-md w-auto p-1 mb-3"
          />
        </fieldset>
        <label>Department</label>
        <Dropdown
          className="w-1/2 m-auto"
          options={DEPARTMENTS_OPTIONS}
          placeholder="Select Department"
          onChange={(e) => {
            handdleChange("department", e.value);
          }}
        />
      </form>
      <button className="mt-2 bg-green-800 text-white p-2 rounded-md" onClick={(e) => handdleSubmit(e)}>Save</button>
      <Modal
        openState={openModal}
        onRequestClose={setOpenModal}
        content={modal_content}
      />
    </div>
  );
};

export default CreateEmployeeForm;
