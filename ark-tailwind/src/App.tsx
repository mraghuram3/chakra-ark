import { TopNav } from "./topnav.jsx";

import { AccordianPage } from "./pages/accordian";
import { ProgressPage } from "./pages/progress";
import { ButtonPage } from "./pages/button";




import "./App.css";



function App() {
  return (
    <>
      <TopNav />
      <div>
        <h1 className="text-3xl font-bold underline">Vite Tailwind</h1>
        <AccordianPage />
        <ProgressPage />
        <ButtonPage />
      </div>
    </>
  );
}

export default App;
