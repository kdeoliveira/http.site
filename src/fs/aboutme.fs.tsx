import { ReactNode } from "react";
import logo from "../logo.svg";
const AboutMe : ReactNode = () => {


    

    
    
    return (
        <div>
            <span style={{
                display: "block",
                textAlign: "center",
                margin: "10px auto",
                fontSize: "9px",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word"

                
            }}>░█████╗░██████╗░░█████╗░██╗░░░██╗████████╗  ███╗░░░███╗███████╗<br/>
            ██╔══██╗██╔══██╗██╔══██╗██║░░░██║╚══██╔══╝  ████╗░████║██╔════╝<br/>
            ███████║██████╦╝██║░░██║██║░░░██║░░░██║░░░  ██╔████╔██║█████╗░░<br/>
            ██╔══██║██╔══██╗██║░░██║██║░░░██║░░░██║░░░  ██║╚██╔╝██║██╔══╝░░<br/>
            ██║░░██║██████╦╝╚█████╔╝╚██████╔╝░░░██║░░░  ██║░╚═╝░██║███████╗<br/>
            ╚═╝░░╚═╝╚═════╝░░╚════╝░░╚═════╝░░░░╚═╝░░░  ╚═╝░░░░░╚═╝╚══════╝</span>
            <img src={logo} alt="Logo" className="App-logo" />
            Sunt ut minim eiusmod nisi mollit voluptate anim ad reprehenderit aliquip dolore adipisicing. Ut commodo aliquip Lorem laboris dolor consequat proident non laboris ullamco pariatur elit pariatur. Quis commodo ad nisi labore Lorem elit esse adipisicing veniam culpa. Lorem magna occaecat commodo duis in adipisicing anim.
            <input type="text" className="App-command" />
        </div>
    )
}

export default AboutMe;
