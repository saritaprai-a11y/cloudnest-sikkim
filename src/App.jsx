import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Homestays from "./pages/Homestays";
import Experiences from "./pages/Experiences";
import Culture from "./pages/Culture";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homestays" element={<Homestays />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;