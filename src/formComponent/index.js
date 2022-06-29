import React from "react";
import "./formStyle.scss";

const FormComponent = () => {
  return (
    <form className="form-container">
        <h1> Test Form</h1>
      <label>
        Test Form
        <input type="text" name="name" />
      </label>
      <label>
        Count
        <input type="number" name="count" />
      </label>
      <label>
        Date
        <input type="date" name="count" />
      </label>
    </form>
  );
};

export default FormComponent;
