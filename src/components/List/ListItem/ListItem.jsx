import React, { useContext, useState } from "react";
import "./ListItem.css"
import { HandlerCtx } from "../../../context/handler-context";

function ListItem(props) {
    const ctx = useContext(HandlerCtx);
    const [isEdit, setIsEdit] = useState(false);
    const [curtype, setCurtype] = useState("");
    const [curcategory, setCurCategory] = useState("");
    const [curpayment, setCurPayment] = useState("");
    const [curamount, setCurAmount] = useState("");
    const type = props.type;
    const category = props.category;
    const payment = props.payment;
    const amount = props.amount;

    const onClickEdit = () => {
        setIsEdit(true);
        setCurtype(props.type);
        setCurCategory(props.category);
        setCurPayment(props.payment);
        setCurAmount(props.amount);
    }

    const onClickDone = () => {
        const editValue = {
            id: props.id,
            type: curtype,
            category: curcategory,
            payment: curpayment,
            amount: curamount,
        }
        setIsEdit(false);
        ctx.editList(props.id, editValue)
    }

    if(isEdit) {
        return (
            <div className="form-control">
                <div className="Lt-container">
                    <input 
                        value={type}
                        onChange={(e => setCurtype(e.target.value))}/>
                </div>
                <div className="Lt-container">
                    <input 
                        value={category}
                        onChange={(e => setCurCategory(e.target.value))}/>
                </div>
                <div className="Lt-container">
                    <input 
                        value={payment}
                        onChange={(e => setCurPayment(e.target.value))}/>
                </div>
                <div className="Lt-container">
                    <input type="number"
                        value={amount}
                        onChange={(e => setCurAmount(e.target.value))}/>
                </div>
                <div className="button-group">
                    <div className="ed-container">
                        <button onClick={onClickDone}>Done</button>
                    </div>
                    <div className="ec-container">
                        <button onClick={() => ctx.deleteList(props.id)}>Delete</button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="form-control">
            <div className="Lt-container">{type}</div>
            <div className="Lt-container">{category}</div>
            <div className="Lt-container">{payment}</div>
            <div className="Lt-container">{amount}</div>
            <div className="ed-container">
                <button onClick={onClickEdit}>Edit</button>
            </div>
            <div className="ec-container">
                <button onClick={() => props.deleteList(props.id)}>Delete</button>
            </div>
        </div>
    )
}

export default ListItem;