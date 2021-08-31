import React, { ChangeEventHandler, forwardRef, KeyboardEventHandler, ReactElement, ReactNode, useEffect } from "react";

import CaretJS from "./caret";

interface CommandLineProps {
    children?: ReactNode;
    prevCmd?: string[];
    onKeyPress: KeyboardEventHandler<HTMLInputElement>;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onKeyUp?: KeyboardEventHandler<HTMLInputElement>;
    onKeyPressDownCapture?: KeyboardEventHandler<HTMLInputElement>;

}

const CommandLine = forwardRef<HTMLInputElement, CommandLineProps>((props, ref): ReactElement => {
    const innerRef = React.useRef<HTMLInputElement | null>(null)

    //Reusable refs
    //https://itnext.io/reusing-the-ref-from-forwardref-with-react-hooks-4ce9df693dd
    useEffect(() => {
        if(!ref)    return;

        if(typeof ref === "function")
            ref(innerRef.current)
        else
            ref.current = innerRef.current;
    }, [ref])


    // useEffect(() => {
    //     const el = document.getElementsByClassName("App-repository");
    //     const span = document.getElementsByClassName("custom-caret");
    //     console.log()
    // if(innerRef.current){
    //     innerRef.current.addEventListener("keydown", (e) => {

    //         span![0].setAttribute("style", `left:${el![0].clientWidth + 5 + innerRef!.current!.value.length*7}px`)
    //     })

    // }
    // })

    useEffect(() => {
        
        CaretJS.create("caret1")
        CaretJS.initialize();
    }, [])
    
        
    let counter = props.prevCmd?.length! - 1;

    const _handleKeyUp = (event : React.KeyboardEvent<HTMLInputElement>) => {
        const arrLength = props.prevCmd?.length;
        if(!arrLength || ref === null) return;
        
        if(event.code === "ArrowUp"){
            event.currentTarget.value = props.prevCmd![counter];
            
            counter !== 0 && counter--;
        }
        else if(event.code === "ArrowDown"){
            if(counter !== props.prevCmd?.length! - 1){
                counter++;
                event.currentTarget.value = props.prevCmd![counter];
                
            }else
                event.currentTarget.value = "";
        }

        CaretJS.update(event)
    }

    return (
    <div className="App-command">
    <input id="caret1" ref={innerRef} autoFocus={true} type="text" autoComplete="off" onKeyUp={_handleKeyUp
    } onKeyPress={props.onKeyPress} onChange={props.onChange} onKeyDownCapture={props.onKeyPressDownCapture} />
        {/* <span className="custom-caret" /> */}


    
    
    </div>
    )

});

export default CommandLine;