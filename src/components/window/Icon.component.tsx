import { ReactElement, useRef } from "react";

interface IconComponentProps{
    children? : string
    icon: string
}

const IconComponent : React.FC<IconComponentProps> = ({children, icon}) : ReactElement => {

    const innerRef = useRef<HTMLDivElement|null>(null);

    return (
        <div className="Window-icon" ref={innerRef}>
            <img src={icon} alt="icon"/>
            <span>{children}</span>
        </div>
    )
}

export default IconComponent;