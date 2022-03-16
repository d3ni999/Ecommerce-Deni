/* eslint-disable no-template-curly-in-string */
//import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/Layout";
import Detail from "./components/Detail";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:productName" element={<Detail/>}/>

    </Routes>
    
  );
}

export default App;
