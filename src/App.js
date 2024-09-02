import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import PopupLogin from "./components/Login";

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleOpenLogin = () => setIsLoginOpen(true);
  const handleCloseLogin = () => setIsLoginOpen(false);
  return (
    <div className="App">
      <Navbar handleOpenLogin={handleOpenLogin} />
      <PopupLogin isOpen={isLoginOpen} onClose={handleCloseLogin} />
      <Home />
      <About />
      <Pricing />
      <Contact />
    </div>
  );
}

export default App;
