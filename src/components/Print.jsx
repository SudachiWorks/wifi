import React from "react";

export function Print() {
  function handleClick() {
    if (typeof window !== "undefined") {
      window.print();
    }
  }
  return (
    <button className="btn btn-primary" onClick={handleClick}>
      Print
    </button>
  );
}
