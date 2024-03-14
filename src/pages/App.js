import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "../components/navigation";
import Contact from "./Contact";
import Projects from "./Projects";
import PresentationItem from "../components/PresentationItem";
import Footer from "../components/Footer";
import "../styles/app.scss";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<PresentationItem />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
