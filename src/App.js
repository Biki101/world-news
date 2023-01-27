import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/nav-bar/main-nav/NavBar";
import Footer from "./components/footer/Footer";
import { useEffect } from "react";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Footer />
    </div>
  );
}

export default App;
