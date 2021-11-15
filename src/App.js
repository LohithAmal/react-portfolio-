import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Portfolio />
      <Resume />
    </>
  );
}

export default App;
