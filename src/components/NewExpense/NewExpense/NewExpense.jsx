import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./../ExpenseForm/ExpenseForm";

export default function NewExpense(props) {
    return (
        <div className="new-expense">
            <ExpenseForm onAddNewExpense={props.onAddNewExpense} />
        </div>
    );
}
