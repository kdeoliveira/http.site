import type { TreeDirectory } from "../context/terminal.context";


export default function clear(args: string, tree: TreeDirectory){

    return {
        value: () => [],
        status: "fetched"
    }
}