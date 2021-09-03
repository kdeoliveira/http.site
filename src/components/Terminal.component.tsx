import React from "react";
import { ReactElement, ReactNode, useEffect, useRef, useState } from "react";
import { useTerminal } from "../context/terminal.context";
import { useStoreSelector } from "../store/hooks";
import CommandLine from "./terminal/CommandLine.component";
import Header from "./terminal/Header.component";
import History from "./terminal/History.component";
import Repository from "./terminal/Repository.component";

export type HistoryNodes = {
    treeCurrentName: string,
    prevCmd: string,
    result: string | ReactNode | Function
}

interface TerminalProps {
    children?: ReactNode;
}



const Terminal: React.FC<TerminalProps> = ({ children }): ReactElement => {
    
    const [cmdState, execute] = useTerminal();

    const inputRef = useRef<HTMLInputElement>(null);

    const [state, setState] = useState<string>("");

    

    const [nodes, setNodes] = useState<HistoryNodes[]>([]);
    window.onclick = function () {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }

    const tree = useStoreSelector(state => state);

    const prevTree = useRef(tree.current);

    //Temporary fix; can be moved as an useCallback to a memoized child component
    //Temporary fix: value of tree.current is held until next rerendering for proper history nodes state mgmt; Should use usePrevious implementation
    useEffect(() => {       
        if (cmdState.status === "error" || cmdState.status === "fetched") {

            //This has to be reimplemented for safety (injection)
            if (typeof cmdState.result === "function") {
                setNodes(cmdState.result())
                return;
            }
            // In case of creating CLI application
            //         if(typeof cmdState.result === "object")
            // return

            setNodes([
                ...nodes,
                {
                    prevCmd: state,
                    result: cmdState.result,
                    treeCurrentName: prevTree.current.path
                },
            ]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cmdState.status]);


    const _handleOnKeyPress = async (event: React.KeyboardEvent<HTMLInputElement>) => {

        if (inputRef.current === null) return;

        if (event.code === "Enter" || event.code === "NumpadEnter") {

            
            inputRef.current.value = "";

            const parsedCmd = state.trim().split(" ");

            await (execute({ cmd: parsedCmd[0], payload: parsedCmd[1] }));


            prevTree.current = tree.current

        }
    }    

    //TODO
    // const _reset =async () => {
    //     console.log("resetting", cmdState.status);
    //     reset();
    //     setState("")
        
    // }




    return (
        <div className="App">
            <Header />
            <History >
                {nodes}
            </History>


            <div className="Terminal">
                <Repository>{tree.current.path}</Repository>
                {
                    (cmdState.status !== "running" ) &&
                    (
                        <CommandLine ref={inputRef} onKeyPress={_handleOnKeyPress} prevCmd={nodes.map((x) => x.prevCmd)} onKeyPressDownCapture={(event) => setState(event.currentTarget.value)} />
                    ) 
                    // :
                    // (
                    //     <InternalApplication onCompleted={_reset} />
                    // )
                }

                {/* In case of creating CLI application */}
                {/* {typeof cmdState.result === "object" ? <><div></div>{cmdState.result}</> : (
                <CommandLine ref={inputRef} onKeyPress={_handleOnKeyPress} prevCmd={nodes.map((x) => x.prevCmd)} onKeyPressDownCapture={(event) => setState(event.currentTarget.value)} />
            )} */}

            </div>
            
        </div>
    )
}

export default Terminal;
