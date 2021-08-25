import { ReactElement, ReactNode } from "react";

interface TerminalProps {
    children?: ReactNode;
}

const Terminal : React.FC<TerminalProps> = ({children}) : ReactElement => {


    return (
        <div>Test</div>
    )
}

export default Terminal;