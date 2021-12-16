import { React, useState } from "react";
import "./global.css";
import Introduction from "./components/Intro/Introduction";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/Contact";

function App() {
  const [view, setView] = useState(0);

  const scrollHandle = (e) => {
    setView(e.target.scrollTop);
    console.log(view);
  };
  return (
    <div className="app">
      <div className="section" onScroll={scrollHandle}>
        <Introduction />
        <About />
        <Gallery />
        <Contact />
      </div>
    </div>
  );
}

export default App;
