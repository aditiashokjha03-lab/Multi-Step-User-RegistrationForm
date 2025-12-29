import React from "react";

export default function StepPersonal({ formValues, dispatch }) {
  return (
    <div>
      <h3>Step 1: Personal Details</h3>
      <input
        type="text"
        placeholder="Name"
        value={formValues.name}
        onChange={(e) =>
          dispatch({ type: "UPDATE_FIELD", field: "name", value: e.target.value })
        }
      />
      <input
        type="email"
        placeholder="Email"
        value={formValues.email}
        onChange={(e) =>
          dispatch({ type: "UPDATE_FIELD", field: "email", value: e.target.value })
        }
      />
      <button
        disabled={!formValues.name || !formValues.email}
        onClick={() => dispatch({ type: "NEXT_STEP" })}
      >
        Next
      </button>
    </div>
  );
}