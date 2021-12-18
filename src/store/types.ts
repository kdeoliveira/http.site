import { BaseSystem } from "../fs/structure.fs"

export type TreeDirectory = {current : any, tree : BaseSystem}

export type TreeAction = {
    type: string
    payload: TreeDirectory | BaseSystem
}

export type DispatchType = (args: TreeAction) => TreeAction
