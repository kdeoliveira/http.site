import type { TreeDirectory } from "../context/terminal.context";
import { changeTreeDirectory } from "../store/action";
import { CommandFunction } from "./cmd.type";

const cd: CommandFunction = (args: string, tree: TreeDirectory) => {


    // if(!args || args === "/") return {
    //     tree: {
    //         ...tree,
    //         current: {
    //             name: "root",
    //             type: "folder",
    //             path: ""
    //         }
    //     },
    //     value: "",
    //     status: "fetched"
    // }
    if (!args || args === "/") {
        changeTreeDirectory({
            name: "root",
            type: "folder",
            path: ""
        });

        return {
            value: "",
            status: "fetched"
        }
    }


    const str = args.trim().split("/");

    if (str[0].length === 0) throw new Error("Incorrect path")


    const key: string[] = tree.current.path.split("/").filter((x: any) => x);

    str.forEach((x) => {
        if (x === "..")
            key.pop();
        else if (x)
            key.push(x);
    })

    let temp: any = tree.tree;



    key.forEach((x: string) => {
        if (x && temp[x] && temp[x].type === "folder")
            temp = temp[x]
        else
            throw new Error(`${args}: Not a directory`)
    })

    if (temp === undefined) throw new Error(`${args}: Not such directory`)

    changeTreeDirectory({
        name: temp.name,
        type: temp.type,
        path: key.join("/")
    });

    return {
        value: "",
        status: "fetched"
    }

}


export default cd;