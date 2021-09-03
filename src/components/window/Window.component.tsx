import React, { useMemo } from "react";
import { ReactElement, ReactNode, useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import cd from "../../cmd/cd";
import { useWindows } from "../../context/window.context";
import { changeTreeDirectory, viewTreeDirectory } from "../../store/action";
import { useStoreSelector } from "../../store/hooks";
import IconComponent from "./Icon.component";

interface WindowComponentProps {
    directory:string
    children?: ReactNode
    title?: ReactNode | string
    onClose?: (args: any) => void
    dataKey: React.Key
}

const WindowComponent: React.FC<WindowComponentProps> = ({ directory, children, title, onClose, dataKey }):
    ReactElement => {
    const [windowMaxState, setWindowMaxState] = useState(false);
    

    const fs = viewTreeDirectory(directory);




    

    const [lastPositoin, setLastPosition] = useState<any>({ })
    const innerRef = useRef<HTMLDivElement | null>(null);

    const [, execute] = useWindows();

    const randomSize = useMemo(() => Math.random() * 50, []);

    useEffect(() => {

        console.log("WindowComponet")

        if (innerRef.current) {
            innerRef.current.style.left = `${randomSize}%`
            innerRef.current.style.top = `${randomSize}%`
        }
    }, [randomSize])

    return (
        <Draggable nodeRef={innerRef} handle=".Window-toolbar" bounds="parent" disabled={windowMaxState}>
            <div ref={innerRef} className="Window-screen" tabIndex={5} onFocus={(e) => e.currentTarget.focus()}>
                <div className="Window-toolbar">
                    <div>{title}</div>
                    <div className="toolbar-btn"> <span>—</span><span onClick={() => {
                        if (innerRef.current) {
                            const style = innerRef.current.style
                            if (!windowMaxState) {
                                setLastPosition({
                                    transform: style.transform,
                                    left: style.left,
                                    top: style.top
                                });

                                style.height = "100%";
                                style.width = "100%";

                                style.left = "0px";
                                style.top = "0px";
                                style.transform = "";

                                setWindowMaxState(true)
                            } else {
                                style.height = "";
                                style.width = "";
                                style.top = lastPositoin.top;
                                style.left = lastPositoin.left;
                                style.transform = lastPositoin.transform;
                                setWindowMaxState(false)

                            }
                        }
                    }}>{windowMaxState ? "▫" : "❒"}</span><span onClick={(e) => {
                        execute({ action: "remove", payload: dataKey })

                        if (onClose) onClose({ event: e, dataKey })
                    }} onTouchStart={(e) => {
                        execute({ action: "remove", payload: dataKey })

                        if (onClose) onClose({ event: e, dataKey })
                    }}>X</span>  </div>
                </div>

                <div className="Window-body">
                    
                    {fs.map(([k,v], i) => {
                        return(
                            <IconComponent key={i} type={v.type}>
                                {k}
                            </IconComponent>
                        )
                    }) }
                    {children}</div>
            </div>
        </Draggable>
    )
}

export default (WindowComponent);