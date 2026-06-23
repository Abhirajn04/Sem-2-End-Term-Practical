import React, { useState } from "react";
import "./App.css";

function App() {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (!dob) {
      alert("Please select your date of birth");
      return;
    }

    const birthDate = new Date(dob);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();

    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 &&
        today.getDate() < birthDate.getDate())
    ) {
      years--;
    }

    setAge(years);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Age Calculator</h1>

        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />

        <button onClick={calculateAge}>Calculate Age</button>

        {age !== null && (
          <h2>Your Age is {age} years</h2>
        )}
      </div>
    </div>
  );
}

export default App;