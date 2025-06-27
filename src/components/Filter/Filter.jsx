import React from "react";
import "./Filter.css"

function Filter({value, onChange}) {
    return (
        <div className="container-header">
            <div className="label-header">
                Filter:
            </div>
            <select value={value} onChange={onChange} className="select-header">
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
            </select>
        </div>
    )
}

export default Filter;