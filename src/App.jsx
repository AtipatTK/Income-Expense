import { useEffect, useReducer, useState } from "react";
import "./App.css";
import NewList from "./components/NewList/NewList";
import List from "./components/List/List";
import Filter from "./components/Filter/Filter";
import { HandlerCtx } from "./context/handler-context";

let count = 4;
const INITIAL_list = [
    {
      id: 1,
      type: "Income",
      category: "Food",
      payment: "Cash",
      amount: 1000,
    },
    {
      id: 2,
      type: "Income",
      category: "electric",
      payment: "Mobile Banking",
      amount: 5340,
    },
    {
      id: 3,
      type: "Expense",
      category: "water",
      payment: "Mobile Banking",
      amount: 2000,
    },
    {
      id: 4,
      type: "Income",
      category: "travel",
      payment: "Mobile Banking",
      amount: 24000,
    },
  ];

function uniqueId() {
  count = count + 1;
  return count;
}

function reducer(list, action) {
  switch (action.type) {
    case "ADD_List":
      return [...list, action.newListItem]
    case "DELETE_List":
      return list.filter((e) => e.id !== action.deletedId)
    case "EDIT_List":
      const newList = [...list]

      const index = list.findIndex((e) => e.id === id);
      newList[index] = {...action.Lists};
      return newList
    default :
  }
}

function App() {
  const [list, dispatch] = useReducer(reducer, {}, () => {
    const localList = localStorage.getItem("list");
    if (localList === null) {
      return INITIAL_list;
    }
    return JSON.parse(localList).map(e => {
      return {
        ...e,
        type: e.type,
      }
    })
  })
  const [Type, setType] = useState("Income");
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const addNewList = (newList) => {
    const newListItem = {
      ...newList,
      id: uniqueId(),
    }
    dispatch({
      type: "ADD_List",
      newListItem: newListItem,
    })
  }

  const deleteList = (id) =>{
    dispatch({
      type: "DELETE_List",
      deletedId: id,
    })
  }

  const editList = (id, Lists) => {
    dispatch({
      type: "EDIT_List",
      editId: id,
      Lists: Lists,
    })
  }

  return (
    <HandlerCtx.Provider value={{
      addNewList: addNewList,
      deleteList: deleteList,
      editList: editList,
    }}>
    <div className="App">
      <div className="header">Income Expense</div>
      {isShow ? ( <NewList setIsShow={setIsShow} />
      ) : (
        <div className="anl">
            <button onClick={() => setIsShow(true)}>Add new List</button>
        </div>)}
        <Filter value={Type} onChange={e => setType(e.target.value)} />
        <List 
        editList={editList} 
        deleteList={deleteList} 
        list={list} 
        filterType={Type}/>
    </div>
    </HandlerCtx.Provider>
  )
}

export default App;