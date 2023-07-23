import "./App.css";
import Navbar from "./components/1_Header/Navbar";
import Footer from "./components/2_Footer/Footer";
import Home from "./components/3_Home/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
