import { ReactElement, ReactNode } from "react";

interface GridComponentProps{
    children? : ReactNode | ReactNode[]
}

const GridComponent : React.FC<GridComponentProps> = ({children}) : ReactElement => {


    return (
        <div className="Window-grid">
            {children}
        </div>
    )
}

export default GridComponent;