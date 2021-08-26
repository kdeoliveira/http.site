import { createContext, Provider, ReactElement, ReactNode, useContext,  useReducer, useState } from "react";
import fileStructure, { BaseSystem } from "../fs/structure.fs";
export type Context = [cmdState: CommandState, execute: ({cmd, payload}: Action) => Promise<void> | void, treeDirectory : TreeDirectory, reset: () => void];

type COMMAND_STATUS = "not_called" | "running" | "fetched" | "error";

type CommandState = { result: string | ReactNode | Function, status:  COMMAND_STATUS, fn?: Function}

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

function commandReducer(cmdState: CommandState, dispatch: Dispatch) {
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
        // const commandFunction = import(`../cmd/${action.cmd}.ts`);
        // cmdState.fn = commandFunction;
        // cmdState.fn = dispatch.result;
        // cmdState.status = "fethed";
        // commandFunction.then((x) => {
        //     cmdState.fn = x.default(action.payload);
        //     cmdState.status = "fethed";
        // });
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


const CommandContext = createContext<Context | undefined>(undefined);

function CommandProvider(props: any): ReactElement<Provider<Context>> {

    //Reducer will perform an action over a state (object);
    //it takes the actual function reducer and initial state reference object; note that an initalDefaultValue can be given as well
    const [cmdState, dispatch] = useReducer(commandReducer, {result: "", status: "not_called"});


    const [tree, setTree] = useState<TreeDirectory>({
    current: {
        path: "",
        name: "root",
        type: "folder"
    }, tree:fileStructure});


    const execute = async (action: Action) => {
        try {
            dispatch({result: "", command: action.cmd, status: "running"})

            const fn = await _import(action.cmd);

            //result is applied directly on the node state of the main Application
            const result = await fn.default(action.payload, tree);
            
            

            result.tree && setTree(result.tree)

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
        <CommandContext.Provider value={[cmdState, execute, tree, reset]}  {...props}/>
    )
}


export const useCommand = () =>{
    const context = useContext(CommandContext);
    if(context === undefined)   throw new Error("useCommand must be used inside a CommandProvider context tree");
    return context;
}

export default CommandProvider;