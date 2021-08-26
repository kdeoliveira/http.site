import React, { ReactChild, ReactChildren, ReactElement, ReactNode, useEffect, useState } from "react"

const useDelay = (ms: number) => {
    const [delay, setDelay] = useState<boolean>(true);

    useEffect(() => {
        const timeout = setTimeout(() => setDelay(false), ms);
        return () => clearTimeout(timeout)
    });

    //returns whatever is passed as an argument as fallback while waiting
    //in another words () => ReactElement
    return (children : any, fallback: any ) : ReactElement => 
        
        delay ? fallback : children
        
    
}


export default useDelay;


export const DelayComponent = ({ms , children, fallback} : {ms: number, children: ReactNode, fallback?: ReactNode}) => useDelay(ms)(children, fallback ? fallback : React.createElement("div"));