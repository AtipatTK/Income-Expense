import { createContext } from "react";

export const HandlerCtx = createContext({
    addNewList: (newList) => {},
    deleteList: (id) => {},
    editList: (id, Lists) => {},
});