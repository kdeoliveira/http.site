import { createContext, Provider, ReactElement, ReactNode, useContext,  useReducer, useState } from "react";
import { BaseSystem } from "../fs/structure.fs";
import { useStoreSelector } from "../store/hooks";
import cat from "../cmd/cat";


export type Context = [cmdState: TerminalState, execute: ({cmd, payload}: Action) => Promise<void> | void, reset: () => void];

type COMMAND_STATUS = "not_called" | "running" | "fetched" | "error";

type TerminalState = { result: string | ReactNode | Function, status:  COMMAND_STATUS, fn?: Function}

export type TreeDirectory = {current : any, tree : BaseSystem}

type Action = {
    cmd: string
    payload: string
}

type Dispatch = {
    command: string;
    result?: any;
    fn?: Function;
    status: COMMAND_STATUS;
    error?:string;
}

function terminalReducer(cmdState: TerminalState, dispatch: Dispatch) {
    cmdState.status = dispatch.status;

    switch(dispatch.status){
        case "running":
        case "fetched":
            return cmdState = {
                ...cmdState,
                result: dispatch.result!,
                fn: dispatch.fn
            }
        case "error":
            return cmdState = {
                ...cmdState,
                result: dispatch.error!,
            }

        default:
            return cmdState;

    }

}


const _import = async (name: string) => {
    if(!name) return {default: () => ""};
    try{
        return await import(`../cmd/${name}`);
    }
    catch(error){
        throw new Error(`${name}: command not found`)
    }
}


const TerminalContext = createContext<Context | undefined>(undefined);

function TerminalProvider(props: any): ReactElement<Provider<Context>> {

    //Reducer will perform an action over a state (object);
    //it takes the actual function reducer and initial state reference object; note that an initalDefaultValue can be given as well
    const [cmdState, dispatch] = useReducer(terminalReducer, {result: "", status: "not_called"});


    const tree = useStoreSelector((state) => state)


    const execute = async (action: Action) => {
        try {
            dispatch({result: "", command: action.cmd, status: "running"});
            
            // In case each page can be executed
            // try{    
            //     const pages = (await cat as any)(action.cmd, tree);
            //     return dispatch({result: pages.value, command: action.cmd, status: pages.status});
            // }
            // catch(error : any){
            
            const fn = await _import(action.cmd);

            //result is applied directly on the node state of the main Application
            const result = await fn.default(action.payload, tree);

            // result.tree && setTree(result.tree)

            return dispatch({result: result.value, command: action.cmd, status: result.status});

        } catch (error : any) {
            return dispatch({error: error.message, command: action.cmd, status: "error"})
            // throw new Error(`command ${action.cmd} does not exist`)
        }

        
    }

    const reset = () => {
        return dispatch({result: "", command: "reset", status: "not_called"})
    }

    return (
        <TerminalContext.Provider value={[cmdState, execute, reset]}  {...props}/>
    )
}


export const useTerminal = () =>{
    const context = useContext(TerminalContext);
    if(context === undefined)   throw new Error("useTerminal must be used inside a TerminalProvider context tree");
    return context;
}

export default TerminalProvider;