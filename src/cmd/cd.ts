import type {TreeDirectory} from "../context/command.context";

function cd(args: string, tree: TreeDirectory){
    
    const str = args.trim().split("/");

    if(str[0].length === 0) throw new Error("Incorrect path")


    const key : string[] = tree.current.path.split("/").filter((x: any) => x);

    


    str.forEach((x) => {
        if(x === "..")
            key.pop();
        else
            key.push(x);
    })
    
    let temp : any = tree.tree;

    console.log("@cd key:", key);




    key.forEach((x : string) => {
        if(x)
            temp = temp[x]
    })

    
    console.log("@cd2 temp", temp)
    

    
    
    //Incorporate both altogether ---- mix the tree.current.path in one string[], then perform transverse
    // str.forEach((x) => {
    //     console.log(x, temp);
    //     if(temp[x] && temp[x].type === "folder")
    //         temp = temp[x]
    //     else
    //         temp = undefined
    // })

    
    
    // tree.current = Object.defineProperty(Object(), str.reverse()[0], {
    //     value: temp,
    //     enumerable: true
    // })
    if(temp !== undefined)
        return {
            value: "",
            tree: {
                ...tree,
                current : {
                    ...temp,
                    path: key.join("/")
                }
            }
        }
    else
        throw new Error("Incorrect path")
}


function front(str : string, obj: any){
    if(obj[str] && obj[str].type === "folder")
        return obj[str]
    else
        return undefined
}

export default cd;