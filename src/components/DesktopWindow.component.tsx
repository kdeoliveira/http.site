import logo from "../logo.svg";
import folder from "./window/folder.png";
import IconComponent from "./window/Icon.component";
import GridComponent from "./window/Grid.component";
import "./window/Window.css"
import {ReactNode} from "react";
import WindowComponent from "./window/Window.component";
import { useWindows } from "../context/window.context";

import {  viewTreeDirectory } from "../store/action";
import { useStoreSelector } from "../store/hooks";


const DesktopWindow = ({ children }: { children?: ReactNode[] }) => {

    const [windows, execute] = useWindows();

    const currentTime = new Date();

    const state = useStoreSelector(state => state);

    console.log(state);

    const fs = viewTreeDirectory(state.current.path);




    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            background: "url('img.jpg') center center",
            backgroundSize: "contain",
        }}>
            <div className="Window-topbar">{`${currentTime.getDay()}/${currentTime.getMonth().toLocaleString('en')} ${currentTime.getHours()}:${currentTime.getMinutes()}`}</div>
            {windows}
            <GridComponent>
                {
                    fs.map(([k,v], i) => {
                        
                        return <IconComponent key={i} type={v.type} onDoubleClick={(e) => {
                            execute({action: "add", payload: <WindowComponent directory={k} title={k} dataKey={Date.now()} />})
                        }} >{k}</IconComponent>
                    })
                }
            </GridComponent>
        </div>
    )
}

export default DesktopWindow;