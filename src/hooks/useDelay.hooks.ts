import React, { ReactElement, ReactNode, useEffect, useState } from "react"


const useDelay = (ms: number, onCompleted?: Function) => {
    const [delay, setDelay] = useState<boolean>(true);

    useEffect(() => {
        const timeout = setTimeout(() => setDelay(false), ms);
        if (!delay && onCompleted)
            onCompleted();

        return () => clearTimeout(timeout)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [delay]);

    return delay;
}


export default useDelay;


export const DelayComponent = ({ ms, children, fallback = null, onCompleted }: { ms: number, children: ReactNode, fallback?: ReactNode, onCompleted?: Function }): any => {

    const delay = useDelay(ms, onCompleted);

    //returns whatever is passed as an argument as fallback while waiting
    //in another words () => ReactElement
    return delay ? fallback : children
}




//Lazy loading with time delay
//  TODO: import the component instance directly, without instnace
//  OR: implement HOC to wrap functional component
export const importLazy = (ms?: number) => (component: string) => {
    // const str = path.join("..", file);

    return React.lazy(() => new Promise(resolve => setTimeout(resolve, ms ? ms : 0)).then(() => import(`../components/${component}.component`)).catch(() => Promise.reject(new Error(`Unable to load ${component}`))))
};