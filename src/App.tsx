import React from 'react';
import './App.css';


import DesktopWindow from "./components/DesktopWindow.component"

import Terminal from './components/Terminal.component';


import Application from "./components/Application.component";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import WindowProvider from './context/window.context';
import TerminalProvider from './context/terminal.context';

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
          <TerminalProvider>

            <Application delay={2000} >
              {{
                main: process.env.NODE_ENV === "production" ? "Terminal" : <Terminal />,
                apps: [],
                deps: ["contact", "projects", "langauges"],
                alt: "window"
              }}
            </Application>
          </TerminalProvider>

        </Route>
        <Route path="/window" exact={true}>
          <WindowProvider>
            <Application delay={2000}>
              {{
                main: process.env.NODE_ENV === "production" ? "DesktopWindow" : <DesktopWindow />,
                apps: [],
                alt: "/"
              }}
            </Application>
          </WindowProvider>
        </Route>
      </Switch>
    </BrowserRouter>



  );
}

export default App;
