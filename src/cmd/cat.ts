import type {TreeDirectory} from "../context/command.context";

const delay = (ms:any) => new Promise(res => setTimeout(res, ms));


async function cat(file : string, tree : TreeDirectory){
    if(!file.includes(".")) throw new Error("File must be provided as argument");

    await delay(5000);

    return {value:"Enim elit ea esse reprehenderit aute minim dolor irure. Nisi consectetur minim est quis cillum quis excepteur dolore ut consectetur. Amet quis dolor dolore labore culpa reprehenderit voluptate. Aute in reprehenderit amet minim consequat ea quis incididunt adipisicing. Ut velit aliqua aliqua ullamco magna esse in proident nisi ut."}
    
    

}


export default cat;