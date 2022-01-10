import React, { useState } from "react";

import "./ExpensesFilter.css";
import { initialSelectedYear } from "./../../../utils/constants";

const ExpensesFilter = (props) => {
    const { onSelectedYearChange } = props;
    const [selectedYear, setSelectedYear] = useState(initialSelectedYear);

    const selectedYearChangeHandler = ({ target: { value } }) => {
        setSelectedYear(value);
        onSelectedYearChange(value);
    };

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select
                    value={selectedYear}
                    onChange={(event) => {
                        selectedYearChangeHandler(event);
                    }}
                >
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;
