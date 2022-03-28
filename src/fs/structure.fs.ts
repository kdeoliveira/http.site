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


// const fileStructure : FileSystem = {
//   home: {
//     name: "home",
//     type: "folder",
//     children: [ 
//       {id: "aboutme"},
//       {id: "repository"},
//       {id: "contact"}
//   ]
//   },

//   sys: {
//     name: "sys",
//     type:"folder",
//     children: [
//       {id: "settings"}
//     ]
//   }
// }


// const aboutme : BaseSystem = {
//   name: "About Me",
//   type: "file",
//   content: "Ipsum ipsum laboris eu veniam. Amet mollit esse fugiat voluptate elit irure. Amet tempor ipsum enim eiusmod occaecat enim sunt anim ex aliquip sint in. Amet mollit officia laboris eu magna sint minim sint ea cillum incididunt exercitation ea. Irure consectetur eu ullamco cillum et minim sint incididunt elit pariatur veniam consectetur."
// }

// const repository : BaseSystem = {
//   name: "Git Repositories",
//   type:"file",
//   content: "Elit occaecat minim et fugiat consectetur ea Lorem laborum excepteur. Irure do magna dolore officia aliqua cillum minim mollit magna elit laboris aute nostrud. Velit ea sit nisi cillum sint laborum dolor elit dolor cupidatat duis."
// }

// const contact : BaseSystem = {

//   name: "Contact Me",
//   type: "file",
//   content: "Nostrud dolore sunt veniam proident excepteur labore aliquip esse. Ea ut do reprehenderit Lorem incididunt consequat sunt in deserunt incididunt. Id exercitation labore dolore cupidatat id aliqua. Minim labore ipsum irure esse fugiat ipsum dolore sint. Enim ad occaecat consectetur ullamco elit laborum ad mollit cillum. Reprehenderit laboris minim occaecat est est. Ullamco ad excepteur est est ipsum pariatur ad incididunt."
// }

// const setttings : BaseSystem = {
//   name: "Settings",
//   type: "file",
//   content: "Ut commodo commodo consequat ullamco."
// }


// const fileProxy = new Proxy(fileStructure, {
//   get: (target, property, receiver) => {
//     console.log( Object.getOwnPropertyNames(target))
//   }
// })




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
