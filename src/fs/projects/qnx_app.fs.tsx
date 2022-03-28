import { ReactNode } from "react";
import github from "../external/github.svg"
import qt from "../external/qt.png"
import qnx from "../external/qnx.png"
import c_plus_plus from "../external/c_plus_plus.svg"
const QnxApp : ReactNode = () => {



    return (
        <div className="content">
            <span style={{
                display: "block",
                textAlign: "center",
                margin: "20px auto",
                fontSize: "9px",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word"
            }}>█░█ █▀▀ █░█ █ █▀▀ █░█ █░░ █▀▀   █▀▄▀█ █▀█ █▄░█ █ ▀█▀ █▀█ █▀█ █ █▄░█ █▀▀   █▀ █▄█ █▀ ▀█▀ █▀▀ █▀▄▀█<br/>
            ▀▄▀ ██▄ █▀█ █ █▄▄ █▄█ █▄▄ ██▄   █░▀░█ █▄█ █░▀█ █ ░█░ █▄█ █▀▄ █ █░▀█ █▄█   ▄█ ░█░ ▄█ ░█░ ██▄ █░▀░█</span>
        <li style={{
            textAlign: "center",
            margin: "10px auto"
        }}>
            <img className="medium_icon" src={qt} alt="qt" />
            <img className="medium_icon" src={qnx} alt="qnx" />
            <img className="medium_icon" src={c_plus_plus} alt="c_plus_plus" />
        </li>
        <li>This is a vehicule monitoring application implemented in C++ RTOS QNX systems</li>
        <li>The application consist of two parts, a producer which gathers information a dataset and a consumer that displays those information to the user</li>
        <li>The project with cmake (producer) and qmake (consumer) over the QNX SDP 7.0 and Qt 5.12.2 framework.</li>
        <li>A toolchain file is provided so the code can be either compiled to any Unix system or cross-compiled to any supported QNX x64 system</li>
        <li>Note that in order to built the GUI using GCC, the proper qmake tool needs to be generated from the Qt source files.</li>
        
        <li>You can access the source code here: <a target={"_blank"} rel="noreferrer" href="https://github.com/kdeoliveira/rtos_vehicule_monitoring"><img src={github} alt="github" className="mini_icon" /> rtos_vehicule_monitoring</a></li>
        </div>
    )
}

export default QnxApp;