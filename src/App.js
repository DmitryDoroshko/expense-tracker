import React, { useState } from 'react';
import Expenses from "./components/Expenses/Expenses/Expenses";
import { expenses as starterExpenses } from "./utils/starter-expenses";

function App() {
  const [expenses, setExpenses] = useState(starterExpenses);
  return (
    <>
      <h1>Let's get started!</h1>
      <Expenses expenses={expenses} />
    </>
  );
}

export default App;
