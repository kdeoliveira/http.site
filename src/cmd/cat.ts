import type { TreeDirectory } from "../context/command.context";

import type {CommandFunction} from "./cmd.type";

const  cat : CommandFunction = (args: string, tree : TreeDirectory) => {

    const str = args ? args.trim().split("/") : [];

    if(!str[0]) throw new Error("File name must be provided")

    const key : string[] = tree.current.path.split("/").filter((x: any) => x);

    str.forEach((x) => {
        if(x === ".."){
            key.pop();
        }else if(x){
            key.push(x);
        }
    });

    let temp : any = tree.tree;

    key.forEach((x : string, i: number) => {

        if(i === key.length -1 && temp[x] && temp[x].type === "folder") return temp = undefined;
        if(x)
            temp = temp[x]
    })


    
    if(temp === undefined)  throw new Error(`${args}: Not a file`);


    return {
        value: typeof temp.content === "function" ? temp.content() : temp.content,
        tree,
        status: "fetched"
    }
}

export default cat;