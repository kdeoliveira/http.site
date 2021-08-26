import type { TreeDirectory } from "../context/command.context";


export default function clear(args: string, tree: TreeDirectory){

    return {
        tree,
        value: () => [],
        status: "fetched"
    }
}