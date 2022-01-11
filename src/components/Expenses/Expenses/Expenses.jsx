import React, { useState, useEffect } from "react";
import ExpenseItem from "./../ExpenseItem/ExpenseItem";
import "./Expenses.css";
import Card from "../../UI/Card/Card";
import ExpenseFilter from "../ExpenseFilter/ExpensesFilter";
import { initialSelectedYear } from "../../../utils/constants";
import ExpensesList from "./../ExpensesList/ExpensesList";
import ExpensesChart from "./../ExpensesChart/ExpensesChart";

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

    return (
        <Card className="expenses">
            <ExpenseFilter onSelectedYearChange={selectedYearChangeHandler} />
            <ExpensesChart expenses={selectedExpenses} />
            <ExpensesList
                selectedYear={selectedYear}
                selectedExpenses={selectedExpenses}
            />
        </Card>
    );
}
