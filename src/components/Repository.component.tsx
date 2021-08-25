import { ReactElement} from "react";
import { BaseSystem } from "../fs/structure.fs";



interface RepositoryProps { 
    children: string
}



const Repository : React.FC<RepositoryProps> = ({children}) : ReactElement => {

    
    
    return (
        <span className="App-repository">
            root@kevindeoliveira:~/{children}
        </span>
    )
}


export default Repository;