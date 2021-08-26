import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import 'remixicon/fonts/remixicon.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Styles/style.scss";


import Layouts from "./Layouts/Layouts";


function App() {
  return (
    <>
      <Router>
        <Layouts />
      </Router> 
    </>
  );
}

export default App;
