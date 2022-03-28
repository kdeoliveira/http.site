

import { memo, ReactElement, ReactNode, useEffect } from "react";
import type { HistoryNodes } from "../Terminal.component";
import DOMPurify from "dompurify";
import Repository from "./Repository.component";
import React from "react";

interface HistoryProps {
    children?: HistoryNodes[];
    update?: Function;
}



//A child component can be converted into a memoized component
//memoized component that only renders when props changes
const History: React.FC<HistoryProps> = ({ children, update }): ReactElement => {
   

    useEffect(() => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        })
    }, [children])

    

    const history = (treeCurrentName: string, prevCmd: string, result?: string | ReactNode, key?: number): ReactNode => (
        <div key={key}>
            <div className="Terminal" >
                <Repository>{treeCurrentName}</Repository>
                <div className="History-command" >{prevCmd}</div>
            </div>
            {result && (
                <div className="Terminal">
                    {/* Renders string to HTML; String is cleaned from escaping characters before render */}
                    
                    {typeof result === "object" ? (
                        result
                        
                    ) : (
                        <div className="History-command" dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(result.toString(), {USE_PROFILES: {html: true}, ALLOWED_TAGS: ['font', 'b', 'div'] } ) }}/>
                    )}
                </div>
            )}
        </div>
    );


    return (
        <div>
            {children && children.map((x, i) => history(x.treeCurrentName, x.prevCmd, x.result, i))}
        </div>
    )
}

export default memo(History);