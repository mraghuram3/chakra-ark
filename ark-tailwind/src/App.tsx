import { TopNav } from "./topnav.jsx";

import { AccordionComp } from "./components/accordian";

import "./App.css";

function App() {
  return (
    <>
      <TopNav />
      <div>
        <h1 className="text-3xl font-bold underline">Vite Tailwind</h1>
        <AccordionComp />
      </div>
    </>
  );
}

export default App;
