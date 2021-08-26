import React, {  useEffect } from 'react';

import './App.css';

import Terminal from './components/Terminal.component';
import {DelayComponent} from "./hooks/useDelay.hooks";

function App() {
  

  // useEffect(() => {
  //   window.addEventListener("load", () => {
  //     console.log("starting");
  //   })
  //   return () => {
  //     window.removeEventListener("load", () => {
  //       console.log("starting")
  //     })
  //   }
  // }, [])

  // console.log("App rerendering")

  return (
    <DelayComponent ms={5000} fallback={<>Loading component</>}> 
         <Terminal /> 
      </DelayComponent>
  );
}

export default App;
