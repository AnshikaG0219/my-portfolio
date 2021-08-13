import React from "react";
import "./App.css";
import { Navbar, Main, Footer, Projects, About } from "./Components";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="bg">
        <Navbar />
        <Main />
        <About/>
        <Projects />
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
