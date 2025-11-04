import { useState } from "react";
import "./App.css";

function App() {
  const [income, setIncome] = useState("");
  const [rent, setRent] = useState("");
  const [food, setFood] = useState("");
  const [transport, setTransport] = useState("");
  const [others, setOthers] = useState("");
  const [balance, setBalance] = useState(null);

  const handleCalculate = () => {
    if (
      income === "" ||
      rent === "" ||
      food === "" ||
      transport === "" ||
      others === ""
    ) {
      alert("Please fill in all fields.");
      return;
    }

    if (
      income <= 0 ||
      rent < 0 ||
      food < 0 ||
      transport < 0 ||
      others < 0
    ) {
      alert("All values must be positive numbers!");
      return;
    }

    const totalExpenses =
      parseFloat(rent) + parseFloat(food) + parseFloat(transport) + parseFloat(others);
    const remaining = parseFloat(income) - totalExpenses;
    setBalance(remaining);
  };

  return (
    <div className="container">
      <h1>💸 Budget Calculator</h1>

      <div className="input-group">
        <label>Monthly Income:</label>
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          placeholder="Enter income"
        />
      </div>

      <div className="input-group">
        <label>Rent / EMI:</label>
        <input
          type="number"
          value={rent}
          onChange={(e) => setRent(e.target.value)}
          placeholder="Enter rent"
        />
      </div>

      <div className="input-group">
        <label>Food Expenses:</label>
        <input
          type="number"
          value={food}
          onChange={(e) => setFood(e.target.value)}
          placeholder="Enter food expenses"
        />
      </div>

      <div className="input-group">
        <label>Transport Expenses:</label>
        <input
          type="number"
          value={transport}
          onChange={(e) => setTransport(e.target.value)}
          placeholder="Enter transport expenses"
        />
      </div>

      <div className="input-group">
        <label>Other Expenses:</label>
        <input
          type="number"
          value={others}
          onChange={(e) => setOthers(e.target.value)}
          placeholder="Enter other expenses"
        />
      </div>

      <button onClick={handleCalculate}>Calculate Balance</button>

      {balance !== null && (
        <div
          className={`result ${
            balance < 0 ? "negative" : "positive"
          }`}
        >
          <h3>
            Remaining Balance: ₹{balance}
          </h3>
          <p>
            {balance < 0
              ? "⚠️ You are overspending!"
              : "✅ Good job managing your expenses!"}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
