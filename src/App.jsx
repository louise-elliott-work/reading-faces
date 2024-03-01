import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App () {
  return (
    <>
    <Router>
        <Header />
        <Routes>
          {/* Different paths set to be rendered, with Home set as the default */}
          <Route path="/" element={<Home />} />
          <Route path="game" element={<Game />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <Footer />
    </Router>
    </>
  )
}

export default App;
