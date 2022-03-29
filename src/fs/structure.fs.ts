import { ReactNode } from "react";
import AboutMe from "./aboutme.fs"
import ContactMe from "./contactme.fs";
import Languages from "./languages.fs";
import FtpService from "./projects/ftp_service.fs";
import QnxApp from "./projects/qnx_app.fs";


export interface BaseSystem {
  [key: string]: {
    type: "folder" | "file" | "link",
    name: string,
    content?: string | ReactNode
  } | BaseSystem
}


const fileStructure: BaseSystem = {
  home: {
    type: "folder",
    name: "home",
    about_me: {
      type: "file",
      name: "About Me",
      content: AboutMe
    },
    languages: {
      type: "file",
      name: "Languages",
      content: Languages
    },
    projects: {
      name: "Projects",
      type: "folder",
      qnx_app: {
        name: "RTOS Vehicule Monitoring System",
        type:"file",
        content: QnxApp
      },
      ftp_service: {
        name: "FTP Client and Server",
        type:"file",
        content: FtpService
      }
    },
    contact_me: {
      name: "subsys",
      type: "file",
      content: ContactMe
    }
  },
  // Recursively add files located under cmd/ folder and resolve its content as a specific value type
  // Ideally its content could be loaded into the terminalex
  bin: {
    type: "folder",
    name: "bin",
    cd: {
      type: "file",
      name: "cd",
      content: "script, ASCII text executable"
    },
    ls: {
      name: "ls",
      type: "file",
      content: "script, ASCII text executable"
    },
    mkdir: {
      name: "mkdir",
      type: "file",
      content: "script, ASCII text executable"
    },
    cat: {
      name: "cat",
      type: "file",
      content: "script, ASCII text executable"
    }
  }
}
export default fileStructure;
