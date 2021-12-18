import { createContext, Provider, ReactElement, useContext,  useReducer } from "react";


type Context = [windows: ReactElement[], execute: (arg: Dispatch) => void]
type Dispatch = {
    action: string
    payload: ReactElement | string | number
    
}

const WindowContext = createContext<Context | undefined>(undefined);

function windowReducer(windows : ReactElement[], dispatch: Dispatch){

    switch(dispatch.action){
        case "add":
            
            return [...windows, dispatch.payload as ReactElement] ;
        case "remove":
        

            return windows.filter(x => x.props.dataKey !== (dispatch.payload as number) )
        default:
            return windows;
    }
}



export default function WindowProvider(props : any) : ReactElement<Provider<Context>>{

    const [windows, dispatch] = useReducer(windowReducer, []);

    // useEffect(() => {
    //     console.log("Provider rerendering")
    // })

    const execute = (action: Dispatch) => {
        dispatch(action);
    }

    return <WindowContext.Provider value={[windows ,execute]} {...props} />
}


export const useWindows = () => {
    const context = useContext(WindowContext);
    if(context === undefined)  throw new Error("useWindows must be used inside a WindowProvider context tree");
    return context;
}