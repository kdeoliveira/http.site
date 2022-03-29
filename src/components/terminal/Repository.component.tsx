import { ReactElement} from "react";



interface RepositoryProps { 
    children: string
}



const Repository : React.FC<RepositoryProps> = ({children}) : ReactElement => {

    
    
    return (
        <span className="App-repository">
            me@kevindeoliveira:~/{children}
        </span>
    )
}


export default Repository;