import React, {  Suspense, useEffect } from 'react';

import './App.css';

import Terminal from './components/Terminal.component';
import {DelayComponent} from "./hooks/useDelay.hooks";


function delay(ms : number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function App() {
  

  useEffect(() => {
    
  }, [])

  console.log("App rerendering")

  return (
    <DelayComponent ms={5000} fallback={<div>Loading</div>}>
         <Terminal /> 
      </DelayComponent>
  );
}

export default App;
