import { Switch, Route, Link, useLocation } from "react-router-dom";

import { TopNav } from "./topnav.jsx";


import { ButtonPage } from "./pages/button"



import '../styled-system/styles.css'

import "./App.css";

function App() {
  return (
    <div className="App">
      <TopNav />
      <div>
        Main App
        <ButtonPage />
      </div>
    </div>
  );
}

export default App;
