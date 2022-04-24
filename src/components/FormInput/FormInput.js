import React from "react";
import './FormInput.css';

function FormInput(props) {
  let { title, onChange, value, type, name } = props;

  return (
    <div className="text-input-container">
      <div className="input-title">{title}</div>
      <input
        className="text-input"
        type={type}
        name={name}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}

export default FormInput;
