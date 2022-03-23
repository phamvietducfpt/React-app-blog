import './styles/App.scss';
import React, { useEffect, useState } from 'react';
import Home from './views/Home';
import Intro from './views/Intro';
import Error404 from './views/Error404'
import { Routes, Route, useLocation } from "react-router-dom";
function App() {
  const [defaultpage, setDeffaultpage] = useState("intro")
  const path = useLocation().pathname;
  const location = path.split("/")[1];
  const check = location == ""
  console.log(check);
  return (
    <div className={"App " + (check ? defaultpage : location)}>
      {console.log(location)}
      <Routes>
        <Route path="/intro" element={<Intro />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" exact element={<Intro />} />
        <Route path="/:something" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;


      // <div classNameName="App">
      //   <header classNameName="App-header">
      //     <img src={logo} classNameName="App-logo" alt="logo" />
      //     <p>
      //       <h1>Hello World with Reactjs</h1>
      //     </p>
      //     <a
      //       classNameName="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>

      // </div>