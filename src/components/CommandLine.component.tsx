import React, { ChangeEventHandler, forwardRef, KeyboardEventHandler, ReactElement, ReactNode } from "react";


interface CommandLineProps {
    children?: ReactNode;
    prevCmd?: string[];
    onKeyPress: KeyboardEventHandler<HTMLInputElement>;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onKeyUp?: KeyboardEventHandler<HTMLInputElement>;
    onKeyPressDownCapture?: KeyboardEventHandler<HTMLInputElement>;

}

const CommandLine = forwardRef<HTMLInputElement, CommandLineProps>((props, ref): ReactElement => {
    ("rerendering commandline component")
    
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
    }

    return <input ref={ref} autoFocus={true} className="App-command" type="text" onKeyUp={_handleKeyUp
    } onKeyPress={props.onKeyPress} onChange={props.onChange} onKeyDownCapture={props.onKeyPressDownCapture}/>

});

export default CommandLine;