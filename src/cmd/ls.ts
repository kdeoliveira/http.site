import LsDisplay from "./ls.display";
import type { TreeDirectory } from "../context/terminal.context";
import get from "lodash.get";

async function ls(args: string, tree: TreeDirectory) {

    const str = args ? args.trim().split("/") : [];

    const key : string[] = tree.current.path.split("/").filter((x: any) => x);

    str.forEach((x) => {
        if(x === ".."){
            key.pop();
        }else if(x){
            key.push(x);
        }
    });

    let temp : any = get(tree.tree, key, tree.tree);
    
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