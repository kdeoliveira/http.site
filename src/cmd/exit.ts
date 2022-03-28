import { TreeDirectory } from "../context/terminal.context";
import { CommandFunction } from "./cmd.type";
import exitDisplay from "./exit.display";




const exit : CommandFunction = (args: string, tree: TreeDirectory) => {


    return {
        value: exitDisplay(),
        status: "fetched"
    }
}

export default exit;