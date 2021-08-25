import React, { ChangeEventHandler, forwardRef, KeyboardEventHandler, ReactElement, ReactNode } from "react";


interface CommandLineProps {
    children? : ReactNode;
    onKeyPress: KeyboardEventHandler<HTMLInputElement>;
        onChange: ChangeEventHandler<HTMLInputElement>;
}

const CommandLine = forwardRef<HTMLInputElement, CommandLineProps>((props, ref) : ReactElement => {

    
    return <input ref={ref} autoFocus={true} className="App-command" type="text" onKeyPress={props.onKeyPress} onChange={props.onChange}/>

});

export default CommandLine;