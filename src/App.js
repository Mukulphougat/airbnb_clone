import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import TextContent from "./Components/TextContent";
import CardPort from "./Components/CardPort";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <TextContent/>
        <CardPort/>
    </div>
  );
}

export default App;
