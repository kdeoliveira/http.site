import { ReactNode } from "react";
import python from "../external/python.svg"
import github from "../external/github.svg"
import ftp from "../external/ftp.png"




const FtpService : ReactNode = () => {



    return (
        <div className="content">
            <span style={{
                display: "block",
                textAlign: "center",
                margin: "20px auto",
                fontSize: "9px",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word"
            }}>█▀▀ ▀█▀ █▀█   █▀ █▀▀ █▀█ █░█ █ █▀▀ █▀▀<br/>
            █▀░ ░█░ █▀▀   ▄█ ██▄ █▀▄ ▀▄▀ █ █▄▄ ██▄</span>
        <li style={{
            textAlign: "center",
            margin: "10px auto"
        }}>
            <img className="medium_icon" src={python} alt="python" />
            <img className="medium_icon" src={ftp} alt="ftp" />

        </li>
        <li>This is a CLI application that emulates a FTP client and server implemented in python</li>
        <li>The main purpose of these client/server programs is to give the client the ability to
download files from the server directory to the client directory and upload files from the client directory to the
server directory</li>
        <li>All required packages for this project are provided in the requirement text file</li>
        <li>Note that in order to built the GUI using GCC, the proper qmake tool needs to be generated from the Qt source files.</li>
        
        <li>You can access the source code here: <a target={"_blank"} rel="noreferrer" href="https://github.com/kdeoliveira/ftp_server"><img src={github} alt="github" className="mini_icon" /> ftp_server</a></li>
        </div>
    )
}

export default FtpService;