import LsDisplay from "./ls.display";
import type { TreeDirectory } from "../context/terminal.context";
import get from "lodash.get";

async function ls(args: string, tree: TreeDirectory) {

    const str = args ? args.trim().split("/") : [];

    if(args === "/"){
        str.pop();
    }

    const key : string[] = tree.current.path.split("/").filter((x: any) => x);

    str.forEach((x) => {
        if(x === ".."){
            key.pop();
        }else if(x){
            key.push(x);
        }else if(!x && key.length > 0){
            key.pop();
        }
    });

    let temp : any = key.length ? get(tree.tree, key, undefined) : tree.tree;
    
    console.log(tree.tree, temp)
    if(temp === undefined)  throw new Error(`${args}: Not a directory`);
    
    const files = Object.entries(temp).filter(([k, _]) => k !== "type" && k !== "name").flatMap(([k, v]) => {
        if((v as any).type === "folder")
            return k.fontcolor("#FF0000")
        else
            return k;
    });


    
    return {
        value: !!files.length && LsDisplay(files),
        status: "fetched"
    }


}

export default ls;