

import { memo, ReactElement, ReactNode, useEffect } from "react";
import type { HistoryNodes } from "../App";
import { BaseSystem } from "../fs/structure.fs";

import Repository from "./Repository.component";

interface HistoryProps {
    children?: HistoryNodes[];
    update?: Function;
}



//A child component can be converted into a memoized component
//memoized component that only renders when props changes
const History: React.FC<HistoryProps> = ({ children, update }): ReactElement => {
    console.log("HJERE")

    

    const history = (treeCurrentName: string, prevCmd: string, result?: string, key?: number): ReactNode => (
        <div key={key}>
            <div className="Terminal" >
                <Repository>{treeCurrentName}</Repository>
                <div className="History-command" >{prevCmd}</div>
            </div>
            {result && (
                <div className="Terminal">
                    <div className="History-command" >{result}</div>
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