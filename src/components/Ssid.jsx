import React from "react";
import { Input } from "./Input";

export function Ssid({ ssid, onChange }) {
  function handleChange(event) {
    onChange(event.target.value);
  }

  return <Input id="ssid" label="SSID" value={ssid} onChange={handleChange} />;
}
