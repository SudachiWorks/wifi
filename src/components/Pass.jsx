import React from "react";
import { Input } from "./Input";

export function Pass({ pass, onChange }) {
  function handleChange(event) {
    onChange(event.target.value);
  }

  return <Input id="pass" label="PASS" value={pass} onChange={handleChange} />;
}
