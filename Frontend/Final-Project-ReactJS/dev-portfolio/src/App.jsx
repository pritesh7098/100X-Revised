import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import { ThemeProvider } from "./context/ThemeContext";

function App() {
    return (
        <ThemeProvider>

            <BrowserRouter>

                <Navbar />

                <Routes>

                    <Route path="/" element={<Home />} />

                    <Route path="/about" element={<About />} />

                    <Route path="/projects" element={<Projects />} />

                    <Route path="/services" element={<Services />} />

                    <Route path="/contact" element={<Contact />} />

                    <Route path="*" element={<NotFound />} />

                </Routes>

                <Footer />

            </BrowserRouter>

        </ThemeProvider>
    );
}

export default App;

/* --------------------- */



