import React, { useContext } from "react";
import "./NewList.css"
import { useState } from "react";
import { HandlerCtx } from "../../context/handler-context";

function NewList(props) {
    const ctx = useContext(HandlerCtx);
    const [type, setType] = useState("");
    const [category, setCategory] = useState("");
    const [payment, setPayment] = useState("");
    const [amount, setAmount] = useState("");

    const typeHandler = (e) => {
        setType(e.target.value);
    };

    const categoryHandler = (e) => {
        setCategory(e.target.value);
    };

    const paymentHandler = (e) => {
        setPayment(e.target.value);
    };

    const amountHandler = (e) => {
        setAmount(e.target.value);
    };

    const clickHandler = () => {
        const newList = {
            type: type,
            category: category,
            payment: payment,
            amount: Number(amount),
        }

        ctx.addNewList(newList)
        props.setIsShow(false)

        setType("");
        setCategory("");
        setPayment("");
        setAmount("");
    }

    return (
        <div className="add-container">
            <div className="input-container">
                <div>
                    <label>Type</label>
                    <select onChange={typeHandler} value={type}>
                        <option value="Expense">Expense</option>
                        <option value="Income">Income</option>
                </select>
                </div>
                <div>
                    <label>Category</label>
                    <select onChange={categoryHandler} value=   {category}>
                        <option value="Food">Food</option>
                        <option value="water">water</option>
                        <option value="teavel">teavel</option>
                    </select>
                </div>
                <div>
                    <label>Payment</label>
                    <select onChange={paymentHandler} value={payment}>
                        <option value="Cash">Cash</option>
                        <option value="Mobile-Banking">Mobile-Banking</option>
                </select>
                </div>
                <div>
                    <label>Amount</label>
                    <input type="number" value={amount} onChange={amountHandler}/>
                </div>
            </div>
            <div className="add-button">
                <button style={{background:"grey"}} onClick={clickHandler}>Add</button>
            </div>
            <div className="add-button">
                <button style={{background:"grey"}} onClick={() => props.setIsShow(false)}>Cancel</button>
            </div>
        </div>
    );
}

export default NewList;