import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./css/main.css";
import { Head } from "./components/Head";
import { Scripts } from "./components/Scripts";
import { Footer } from "./components/Footer.js";
import { LandingPage } from "./components/LandingPage";
import { About } from "./components/About";
import { NotFound } from "./components/NotFound";

function App() {
  return (
    <Router>
      <Head />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={<ContactPage />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Scripts />
    </Router>
  );
}

export default App;
