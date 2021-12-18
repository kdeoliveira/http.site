import { ReactNode } from "react";
import AboutMe from "./aboutme.fs"

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
    about: {
      type: "file",
      name: "About Me",
      content: AboutMe
    },
    img: {
      type: "file",
      name: "img1.jpg",
      content: "Dolore adipisicing eiusmod officia pariatur reprehenderit consequat minim ut elit consequat labore."
    },
    doc: {
      name: "doc1.txt",
      type: "file",
      content: "Veniam eiusmod duis pariatur labore mollit in cillum veniam."
    },
    sys: {
      name: "subsys",
      type: "folder",
      extra: {
        name: "extra",
        type:"folder"
      }
    }
  },
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
