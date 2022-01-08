import React from "react";
import ExpenseItem from "./../ExpenseItem/ExpenseItem";

export default function Expenses({ expenses }) {
    return (
        <div className="expenses">
            {expenses.map((expense) => {
                return (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                );
            })}
        </div>
    );
}
