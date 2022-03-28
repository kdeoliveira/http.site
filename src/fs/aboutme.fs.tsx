import { ReactNode } from "react";
import logo from "../logo.svg";
const AboutMe : ReactNode = () => {


    

    
    
    return (
        <div className="content">
            <span style={{
                display: "block",
                textAlign: "center",
                margin: "20px auto",
                fontSize: "9px",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word"

                
            }}>░█████╗░██████╗░░█████╗░██╗░░░██╗████████╗  ███╗░░░███╗███████╗<br/>
            ██╔══██╗██╔══██╗██╔══██╗██║░░░██║╚══██╔══╝  ████╗░████║██╔════╝<br/>
            ███████║██████╦╝██║░░██║██║░░░██║░░░██║░░░  ██╔████╔██║█████╗░░<br/>
            ██╔══██║██╔══██╗██║░░██║██║░░░██║░░░██║░░░  ██║╚██╔╝██║██╔══╝░░<br/>
            ██║░░██║██████╦╝╚█████╔╝╚██████╔╝░░░██║░░░  ██║░╚═╝░██║███████╗<br/>
            ╚═╝░░╚═╝╚═════╝░░╚════╝░░╚═════╝░░░░╚═╝░░░  ╚═╝░░░░░╚═╝╚══════╝</span>
            
            <li>Hey there 👋, my name is Kevin and I am currently studying Computer Engineering in Canada.</li>
            <li>I previously studied aviation and obtained a canadian commercial pilot license (CPL/IFR).</li>
            <li>However, I ended up discovering this new field and I spend most of my time working on new projects and discovering new technologies.</li>
            <li>And as you may see, I am a linux enthusiast &#128516;</li>
        </div>
    )
}

export default AboutMe;
