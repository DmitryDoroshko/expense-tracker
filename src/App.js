import React, { useState } from 'react';
import Expenses from "./components/Expenses/Expenses/Expenses";
import { expenses as starterExpenses } from "./utils/starter-expenses";
import NewExpense from './components/NewExpense/NewExpense/NewExpense.jsx';

function App() {
    const [expenses, setExpenses] = useState(starterExpenses);

    const addNewExpenseHandler = (newExpense) => {
        setExpenses(prevExpenses => {
            return [...prevExpenses, newExpense];
        });
    };

    return (
        <>  
            <NewExpense onAddNewExpense={addNewExpenseHandler} />
            <Expenses expenses={expenses} />
        </>
    );
}

export default App;
