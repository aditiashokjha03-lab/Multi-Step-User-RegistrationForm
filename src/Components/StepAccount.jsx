import React from "react";

export default function StepAccount({ formValues, dispatch }) {
  return (
    <div>
      <h3>Step 2: Account Details</h3>
      <input
        type="text"
        placeholder="Username"
        value={formValues.username}
        onChange={(e) =>
          dispatch({ type: "UPDATE_FIELD", field: "username", value: e.target.value })
        }
      />
      <input
        type="password"
        placeholder="Password"
        value={formValues.password}
        onChange={(e) =>
          dispatch({ type: "UPDATE_FIELD", field: "password", value: e.target.value })
        }
      />
      <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>Back</button>
      <button
        disabled={!formValues.username || !formValues.password}
        onClick={() => dispatch({ type: "NEXT_STEP" })}
      >
        Next
      </button>
    </div>
  );
}