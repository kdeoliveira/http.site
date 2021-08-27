import { ReactElement } from "react";
import "./Loader.css";

interface LoaderProps{
    loading: boolean;
    log : string[];
    delay?: number
}

const Loader : React.FC<LoaderProps> = ({loading , log, delay}) : ReactElement | null => {
    
// https://blog.logrocket.com/lazy-loading-components-in-react-16-6-6cea535c0b52/

    const totalDuration = delay!/log.length;

    return !loading ? (
        <div className="Loader-main">
            <span className="Loader-bar">
                <span className="Loader-spinner-1" />
                <span className="Loader-spinner-2" />
            </span>

            <span className="Loader-log">
                {log.map((x, i) => <li key={i} className="fade-in" style={{animationDelay:`${i*totalDuration}ms`, animationDuration:`${totalDuration}ms`}}>{x}...</li>)}
            </span>
        </div>
    )
    :
    null
    
}

export default Loader;
