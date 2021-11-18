import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Submenu from "./components/Submenu";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Submenu />
    </React.Fragment>
  );
}

export default App;
