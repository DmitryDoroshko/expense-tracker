import React, { useState } from "react";
import "./ExpenseForm.css";
import { v4 as uuidv4 } from "uuid";

export default function ExpenseForm(props) {
    const { onAddNewExpense } = props;

    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const titleChangeHandler = ({ target: { value } }) => {
        setEnteredTitle(value);
    };

    const amountChangeHandler = ({ target: { value } }) => {
        setEnteredAmount(value);
    };

    const dateChangeHandler = ({ target: { value } }) => {
        setEnteredDate(value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();

        if (!enteredTitle || !enteredAmount || !enteredDate) {
            return;
        }

        const newExpense = {
            id: uuidv4(),
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };

        onAddNewExpense(newExpense);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        value={enteredAmount}
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        value={enteredDate}
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}
