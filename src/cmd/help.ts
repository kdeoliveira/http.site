import { TreeDirectory } from "../context/command.context";
import { CommandFunction } from "./cmd.type";
import helpDisplay from "./help.display";



const help : CommandFunction = (args: string, tree: TreeDirectory) => {


    return {
        value: helpDisplay(),
        tree,
        status: "fetched"
    }
}

export default help;