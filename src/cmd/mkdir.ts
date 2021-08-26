import { TreeDirectory } from "../context/command.context";
import set from "lodash.set";
import { CommandFunction } from "./cmd.type";

const mkdir : CommandFunction  = (args: string, tree: TreeDirectory) => {

    if( !args.match("^([a-zA-Z]|[_])*$") ) throw new Error("Incorrect folder name provided");
    const str = args ? args.trim().split("/") : [];

    if(str.length === 0) throw new Error("Folder name must be provided");

    const folderName = str.pop();

    const key : string[] = tree.current.path.split("/").filter((x: any) => x);

    str.forEach((x) => {
        if(x === ".."){
            key.pop();
        }else if(x){
            key.push(x);
        }
    });

    key.push(folderName as string);

    set(tree.tree ,key, {
        name: folderName,
        type: "folder"
    });


    return {
        value: "",
        tree,
        status: "fetched"
    }
}


export default mkdir;