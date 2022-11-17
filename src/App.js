import React, { useState } from "react";
import Nav from "./components/Nav";
import Pages from "./pages/Pages";
import Footer from "./components/Footer";

function App() {
  const [currentPage, setcurrentPage] = useState({ name: "home" });
  return (
    <div className="App">
      <Nav setcurrentPage={setcurrentPage} />
      <Pages currentPage={currentPage} />
      <Footer />
    </div>
  );
}

export default App;
