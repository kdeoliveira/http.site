import { TreeDirectory } from "../context/command.context";

export type CommandFunction = (args: string, tree: TreeDirectory, ...optional : any[]) => {
    
        value: any,
        tree: TreeDirectory,
        status: "fetched" | "not_called" | "running"
    
}

