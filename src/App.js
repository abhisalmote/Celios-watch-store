import "./App.css";
import Navbar from "./components/1_Header/Navbar";
import Footer from "./components/2_Footer/Footer";
import Home from "./components/3_Home/Home";
import Watches from "./components/4_Watch/Watches";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Watches />
      <Footer />
    </div>
  );
}

export default App;
