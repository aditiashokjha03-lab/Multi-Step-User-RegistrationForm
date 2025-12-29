import React, { useReducer } from "react";
import { formReducer, initialState } from "../Reducers/formReducer";
import StepPersonal from "./StepPersonal";
import StepAccount from "./StepAccount";
import StepReview from "./StepReview";

export default function RegistrationForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { step, formValues, isSubmitted } = state;

  if (isSubmitted) {
    return (
      <div>
        <h2>🎉 Form Submitted Successfully!</h2>
        <button onClick={() => dispatch({ type: "RESET_FORM" })}>Reset</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Multi-Step Registration Form</h2>
      <p>Step {step} of 3</p>

      {step === 1 && <StepPersonal formValues={formValues} dispatch={dispatch} />}
      {step === 2 && <StepAccount formValues={formValues} dispatch={dispatch} />}
      {step === 3 && <StepReview formValues={formValues} dispatch={dispatch} />}
    </div>
  );
}