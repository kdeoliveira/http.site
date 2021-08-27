import React, { ReactElement, ReactNode, useEffect, useState } from "react"

const useDelay = (ms: number, onCompleted?: Function) => {
    const [delay, setDelay] = useState<boolean>(true);

    useEffect(() => {
        const timeout = setTimeout(() => setDelay(false), ms);
        if(!delay && onCompleted)
            onCompleted();

        return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [delay]);

    //returns whatever is passed as an argument as fallback while waiting
    //in another words () => ReactElement
    return (children : any, fallback: any) : ReactElement => {

        return delay ? fallback : children
    }
        
        
    
}


export default useDelay;


export const DelayComponent = ({ms , children, fallback, onCompleted} : {ms: number, children: ReactNode, fallback?: ReactNode, onCompleted?: Function}) =>{


    return useDelay(ms, onCompleted)(children, fallback ? fallback : React.createElement("div"));
}




//Lazy loading with time delay
//  TODO: import the component instance directly, without instnace
//  OR: implement HOC to wrap functional component
export const lazyComponent = (ms : number) => (path: string) => new Promise(resolve => setTimeout(resolve, ms)).then(
    () => import(path)
).catch(
    () => Promise.reject(new Error("Unable to load component at "+path))
)