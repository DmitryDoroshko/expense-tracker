import React from "react";
import ExpenseItem from "./../ExpenseItem/ExpenseItem";
import "./Expenses.css";
import Card from "../../UI/Card/Card";

export default function Expenses({ expenses }) {
    return (
        <Card className="expenses">
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
        </Card>
    );
}
