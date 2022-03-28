import { Reducer } from "redux";
import fileStructure from "../fs/structure.fs";
import { Actions } from "./action.types";
import { TreeDirectory, TreeAction } from "./types";

const init : TreeDirectory = {
    current: {
        path: "home",
        name: "home",
        type: "folder"
    },
    tree: fileStructure
}

const reducer : Reducer<TreeDirectory, TreeAction> = (state: TreeDirectory = init, action: TreeAction) : TreeDirectory => {
    switch(action.type){
        case Actions.ADD:
            return {
                ...state,
                tree: action.payload
            }
        case Actions.REMOVE:
            return {
                ...state,
                tree: action.payload
            }
        case Actions.CHANGE:
            return {
                ...state,
                current: action.payload
            }
        default:
            return state;
    }
}

export default reducer;
