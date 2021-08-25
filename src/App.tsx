import React, { useEffect, useRef, useState } from 'react';

import './App.css';
import { useCommand } from './context/command.context';
import History from './components/History.component';
import Repository from './components/Repository.component';
import CommandLine from "./components/CommandLine.component";
import Header from "./components/Header.component"
import { BaseSystem } from './fs/structure.fs';
export   type HistoryNodes = {
  treeCurrentName : string,
  prevCmd: string,
  result: string
}




function App() {
  


  const [cmdState, execute, tree] = useCommand();

  const inputRef = useRef<HTMLInputElement>(null);

  const [state, setState] = useState<string>("")

  const [nodes, setNodes] = useState<HistoryNodes[]>([]);
  window.onclick = function(){
    if(inputRef.current){
      inputRef.current.focus();
    }
  }


  const prevTree = useRef(tree.current);

  //Temporary fix; can be moved as an useCallback to a memoized child component
  //Temporary fix: value of tree.current is held until next rerendering for proper history nodes state mgmt; Should use usePrevious implementation
  useEffect(() => {

    if(cmdState.status === "error" || cmdState.status === "fetched"){
        console.log(tree.current)
            setNodes([
        ...nodes,
        {
          prevCmd: state,
          result: cmdState.fn,
          treeCurrentName: prevTree.current.path
        },
      ]);
    }
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cmdState.status] );

  const _handleOnChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  }



  const _handleOnKeyPress = async (event : React.KeyboardEvent<HTMLInputElement>) => {
    if(!inputRef.current) return;

    

    if(event.code === "Enter" || event.code === "NumpadEnter"){

      const parsedCmd = state.trim().split(" ");

      await (execute({ cmd: parsedCmd[0], payload: parsedCmd[1] }));
      inputRef.current!.value = "";

      prevTree.current = tree.current

    }
  }
 

  
  return (
    <div className="App">
        <Header />
        <History >
          {nodes}
        </History>
      <div className="Terminal">
        <Repository>{tree.current.path}</Repository>
        {/* <input ref={inputRef} autoFocus={true} className="App-command" type="text" onKeyPress={_handleOnKeyPress} onChange={_handleOnChange}/> */}

        <CommandLine ref={inputRef} onKeyPress={_handleOnKeyPress} onChange={_handleOnChange} />
      </div>
    </div>
  );
}

export default App;
