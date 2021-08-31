import React, {  ReactElement, Suspense, useEffect, useState } from 'react';
import './App.css';


import DesktopWindow from "./components/DesktopWindow.component"

import Terminal from './components/Terminal.component';


import Application from "./components/Application.component";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {

//   useEffect(() => {
//     console.log(divRef.current?.addEventListener("keydown", (x) => console.log(x)))
// }, [divRef])

  return (
    // <DelayComponent ms={delay} fallback={<Loader loading={false} log={log} delay={delay}/>}> 
    //      <Terminal /> 
    //   </DelayComponent>
<BrowserRouter>
    
      <Switch>
        <Route path="/" exact={true} >
    <Application  delay={0} >
        {{
          main: <Terminal />,
          apps: [],
          deps: ["cat", "nano"],
          alt: "window"
        }}
    </Application>
    </Route>
    <Route path="/window" exact={true}>
      <Application delay={0}>
      {{
        main: <DesktopWindow />,
        apps:[],
        alt: "/"
      }}
      </Application>
    </Route>
    </Switch>
</BrowserRouter>
      
    

  );
}

export default App;
