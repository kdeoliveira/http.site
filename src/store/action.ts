import { get } from "lodash";
import { BaseSystem } from "../fs/structure.fs";
import { Actions } from "./action.types";
import store from "./store";
import {TreeAction } from "./types";

export function addTreeDirectory(object: BaseSystem){
    
    const action : TreeAction = {
        type: Actions.ADD,
        //tree
        payload: object
    }
    return store.dispatch(action)
}

export function removeTreeDirectory(object : BaseSystem){
    const action : TreeAction = {
        type: Actions.REMOVE,
        //tree
        payload: object
    }
    return store.dispatch(action)
}

export function changeTreeDirectory(object : any){
    const action : TreeAction = {
        type: Actions.CHANGE,
        //current
        payload: object
    }
    return store.dispatch(action)
}



export function viewTreeDirectory(arg : string){

    const state = store.getState();

    const key : string[] = state.current.path.split("/").filter((x: any) => x);

    const str = arg ? arg.trim().split("/") : [];

    
    str.forEach((x) => {
        if(x === ".."){
            key.pop();
        }else if(x){
            key.push(x);
        }
    });

    type filesType = { type: "folder" | "file" | "link"; 
                                    name: string; 
                                    content?: any; 
                                }

    let temp : filesType = get(state.tree, key, state.tree);

    if(temp === undefined)  throw new Error(`${key}: Not a directory`);

    const files : [string, filesType][] = Object.entries(temp).filter(([k, _]) => k !== "type" && k !== "name");
    
    return files;
}