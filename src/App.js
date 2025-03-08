import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./Features/Home";
import Layout from "./Features/Layout";
import About from "./Features/About"
import Projects from "./Features/Projects"
import Skills from "./Features/Skills";
import Contact from "./Features/Contact";

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />}/>
            <Route path="contact" element={<Contact />}/>
            <Route path="projects" element={<Projects />}/>
            <Route path="skills" element={<Skills />}/>
          </Route>
        </Routes>
      </Router>
  );
}

export default App;
