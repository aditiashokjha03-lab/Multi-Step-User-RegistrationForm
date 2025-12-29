// App.jsx
import React from "react";
import RegistrationForm from "./Components/RegistrationForm";
import "./Styles/form.css";

function App() {
  return (
    <div className="App">
      <div className="card">
        <RegistrationForm />
      </div>
    </div>
  );
}

export default App;