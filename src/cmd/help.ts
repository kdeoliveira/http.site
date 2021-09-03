import { TreeDirectory } from "../context/terminal.context";
import { CommandFunction } from "./cmd.type";
import helpDisplay from "./help.display";



const help : CommandFunction = (args: string, tree: TreeDirectory) => {


    return {
        value: helpDisplay(),
        status: "fetched"
    }
}

export default help;