import React from "react";
import ListItem from "./ListItem/ListItem";
import "./List.css";

function List(props) {
    const list = props.list;
     const filteredType = list.filter(e => e.type === props.filterType);

    return (
        <div className="tdl-container">
            {filteredType.map(e => 
                <ListItem
                editList={props.editList}
                deleteList={props.deleteList}
                id={e.id}
                key={e.id}
                type={e.type}
                category={e.category}
                payment={e.payment}
                amount={e.amount}
            />)}

        </div>
    );
}

export default List;