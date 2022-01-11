import React, { useState, useEffect } from "react";
import ExpenseItem from "./../ExpenseItem/ExpenseItem";
import "./Expenses.css";
import Card from "../../UI/Card/Card";
import ExpenseFilter from "../ExpenseFilter/ExpensesFilter";
import { initialSelectedYear } from "../../../utils/constants";

export default function Expenses(props) {
    const { expenses } = props;

    const [selectedYear, setSelectedYear] = useState(initialSelectedYear);

    const initialSelectedExpenses = expenses.filter((expense) => {
        return expense.date.getFullYear() == selectedYear;
    });

    const [selectedExpenses, setSelectedExpenses] = useState(
        initialSelectedExpenses
    );

    function selectedYearChangeHandler(year) {
        const selectedExpenses = expenses.filter((expense) => {
            return expense.date.getFullYear() == year;
        });
        setSelectedYear(() => year);
        setSelectedExpenses(() => selectedExpenses);
    }

    useEffect(() => {
        setSelectedExpenses(() => {
            const selectedExpenses = expenses.filter((expense) => {
                return expense.date.getFullYear() == selectedYear;
            });

            return selectedExpenses;
        });
    }, [expenses, selectedYear]);

    let expensesContent = `No expenses for year ${selectedYear} available`;

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
    }

    return (
        <Card className="expenses">
            <ExpenseFilter onSelectedYearChange={selectedYearChangeHandler} />
            {expensesContent}
        </Card>
    );
}
