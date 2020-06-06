import React from "react";

export function Input({ id, label, value, onChange }) {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        aria-labelledby={id}
        type="text"
        className="form-control"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
