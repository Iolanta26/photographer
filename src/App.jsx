import { React, useState } from "react";
import Introduction from "./components/Intro/Introduction";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";

import "./app.css";

function App() {
  const [view, setView] = useState(0);

  const scrollHandle = (e) => {
    setView(e.target.scrollTop);
    // console.log(view);
  };
  return (
    <div className="app">
      <Navbar />
      <div className="sections" onScroll={scrollHandle}>
        <Introduction />
        <About view={view} />
        <Gallery view={view} />
        <Contact view={view} />
      </div>
    </div>
  );
}

export default App;
