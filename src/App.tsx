import React, {  useState } from 'react';
import './App.css';

import Terminal from './components/Terminal.component';
import {DelayComponent} from "./hooks/useDelay.hooks";
import Loader from "./Loader";

function App() {
  
  const log = [
    "gnu terminal",
    "frontend pages",
    "pkg dependencies",
    "git repositories",
    "Consequat eiusmod ullamco",
    "end!"
]

const delay = 100000;

  return (
    <DelayComponent ms={delay} fallback={<Loader loading={false} log={log} delay={delay}/>}> 
         <Terminal /> 
      </DelayComponent>
  );
}

export default App;
