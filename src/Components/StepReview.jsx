import React from "react";

export default function StepReview({ formValues, dispatch }) {
  return (
    <div>
      <h3>Step 3: Review & Submit</h3>
      <p><strong>Name:</strong> {formValues.name}</p>
      <p><strong>Email:</strong> {formValues.email}</p>
      <p><strong>Username:</strong> {formValues.username}</p>
      <p><strong>Password:</strong> {formValues.password}</p>

      <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>Back</button>
      <button onClick={() => dispatch({ type: "SUBMIT_FORM" })}>Submit</button>
    </div>
  );
}