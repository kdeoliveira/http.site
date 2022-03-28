import { ReactNode } from "react";

const ContactMe : ReactNode = () => {



    return (
        <div className="content">
            
            <span style={{
                display: "block",
                textAlign: "center",
                margin: "20px auto",
                fontSize: "9px",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word"
            }}>░█████╗░░█████╗░███╗░░██╗████████╗░█████╗░░█████╗░████████╗  ███╗░░░███╗███████╗<br/>
            ██╔══██╗██╔══██╗████╗░██║╚══██╔══╝██╔══██╗██╔══██╗╚══██╔══╝  ████╗░████║██╔════╝<br/>
            ██║░░╚═╝██║░░██║██╔██╗██║░░░██║░░░███████║██║░░╚═╝░░░██║░░░  ██╔████╔██║█████╗░░<br/>
            ██║░░██╗██║░░██║██║╚████║░░░██║░░░██╔══██║██║░░██╗░░░██║░░░  ██║╚██╔╝██║██╔══╝░░<br/>
            ╚█████╔╝╚█████╔╝██║░╚███║░░░██║░░░██║░░██║╚█████╔╝░░░██║░░░  ██║░╚═╝░██║███████╗<br/>
            ░╚════╝░░╚════╝░╚═╝░░╚══╝░░░╚═╝░░░╚═╝░░╚═╝░╚════╝░░░░╚═╝░░░  ╚═╝░░░░░╚═╝╚══════╝</span>

        <li>You can reach me by email: <a href="mailto:contact@kevindeolvieira.com">contact@kevindeoliveira.com</a></li>
        <li>Or on discord: <a target={"_blank"} rel="noreferrer" href="https://discord.com/app">kdeoliveira#1062</a></li>
        </div>
    )
}

export default ContactMe;