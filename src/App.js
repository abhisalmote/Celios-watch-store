import "./App.css";
import Navbar from "./components/1_Header/Navbar";
import Footer from "./components/2_Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
