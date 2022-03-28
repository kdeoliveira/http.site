import { ReactNode } from "react";

import typescript from "./external/typescript.svg"
import c_plus_plus from "./external/c_plus_plus.svg"
import python from "./external/python.svg"



const Languages : ReactNode = () => {



    return (
        <div className="content">
            
            <span style={{
                display: "block",
                textAlign: "center",
                margin: "20px auto",
                fontSize: "9px",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word"
            }}>██╗░░░░░░█████╗░███╗░░██╗░██████╗░██╗░░░██╗░█████╗░░██████╗░███████╗░██████╗<br/>
██║░░░░░██╔══██╗████╗░██║██╔════╝░██║░░░██║██╔══██╗██╔════╝░██╔════╝██╔════╝<br/>
██║░░░░░███████║██╔██╗██║██║░░██╗░██║░░░██║███████║██║░░██╗░█████╗░░╚█████╗░<br/>
██║░░░░░██╔══██║██║╚████║██║░░╚██╗██║░░░██║██╔══██║██║░░╚██╗██╔══╝░░░╚═══██╗<br/>
███████╗██║░░██║██║░╚███║╚██████╔╝╚██████╔╝██║░░██║╚██████╔╝███████╗██████╔╝<br/>
╚══════╝╚═╝░░╚═╝╚═╝░░╚══╝░╚═════╝░░╚═════╝░╚═╝░░╚═╝░╚═════╝░╚══════╝╚═════╝░</span>

<li><img src={typescript} alt="ts" className="mini_icon" />Web applications front and backend in typescript </li>
            <li><img src={c_plus_plus} alt="c_plus_plus" className="mini_icon" />Some CLI applications and projects for embedded devices in C/C++ </li>
            <li><img src={python} alt="python" className="mini_icon" />CLI and Web applications in Python </li>
        </div>
    )
}

export default Languages;