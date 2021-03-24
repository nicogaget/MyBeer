import React from "react";

const Field = ({
  name,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  error = "",
}) => (
  <>
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        onChange={onChange}
        value={value}
        type={type}
        placeholder={placeholder}
        name={name}
        id={name}
        className={"form-control " + (error && "is-invalid")}
        autoComplete="off"
      />
      {error && <p className="invalid-feedback">{error}</p>}
    </div>
  </>
);

export default Field;
