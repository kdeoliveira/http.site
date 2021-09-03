import { ReactElement, useEffect, useRef, useState } from "react";
import Draggable from "react-draggable";
import folder from "../window/folder.png";


interface IconComponentProps{
    children?: string
    icon?: string
    onDoubleClick?: (args : any) => void
    type: "folder"|"file"|"link"
}

const IconComponent : React.FC<IconComponentProps> = ({children, icon, onDoubleClick, type}) : ReactElement => {

    const [state, setState] = useState<boolean>(false);

    const innerRef = useRef<HTMLDivElement|null>(null);

    return (
        <Draggable nodeRef={innerRef} bounds="parent" scale={1} onDrag={(e) =>{

        if(e.type === "mousemove") e.preventDefault() 

        }} allowAnyClick={false}>
        <div className="Window-icon" ref={innerRef} onTouchStart={(e) => {
            
            if(!state){
                
                setState(true);
                setTimeout(function(){
                    setState(false)
                }, 300);
                return;
            }
            if(onDoubleClick) onDoubleClick(e);
        }} onDoubleClick={ (e) => {
            if(onDoubleClick) onDoubleClick(e)
        }} >
            
            <img src={type === "folder" ? folder : icon } alt={children}/>
            
            <span>{children}</span>
        </div>
        </Draggable>
    )
}

export default IconComponent;