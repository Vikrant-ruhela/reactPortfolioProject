import "./styles/App.css"
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from "./components/Skills";

function App() {

  return (
    <>
      <Router>

        <Header />

        <Home />
        <Skills />
        <About />
        <Projects />
        <Contact />


        <Footer />

      </Router>

    </>
  )
}

export default App
