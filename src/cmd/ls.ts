import type { TreeDirectory } from "../context/command.context";

async function ls(file: string, tree: TreeDirectory) {

    return {
        value: `
        Android     Downloads      package-lock.json  'System Volume Information'
        app         Music          Pictures            Templates
        Desktop     node_modules   Postman             Videos
        dev         opt            Public             'VirtualBox VMs'
        Documents   package.json   snap
       
        `
    }
}

export default ls;