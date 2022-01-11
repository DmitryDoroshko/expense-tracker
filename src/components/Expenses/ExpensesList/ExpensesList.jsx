import React from "react";
import ExpenseItem from "./../ExpenseItem/ExpenseItem";
import "./ExpensesList.css";

export default function ExpensesList(props) {
    const { selectedYear, selectedExpenses } = props;

    let expensesContent = (
        <h2 className="expenses-list__fallback">{`No expenses for year ${selectedYear} available`}</h2>
    );

    if (selectedExpenses.length !== 0) {
        expensesContent = selectedExpenses.map((expense) => {
            return (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            );
        });
        return <ul className="expenses-list">{expensesContent}</ul>;
    }

    return expensesContent;
}
